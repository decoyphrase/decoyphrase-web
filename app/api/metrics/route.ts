/**
 * Metrics API Route
 * Aggregates live metrics from Arweave and GitHub
 *
 * @route GET /api/metrics
 */

import { NextResponse } from 'next/server';
import { getArweaveStats } from '@/lib/services/arweave-graphql';
import { BlockchainClient } from '@/lib/api/blockchain';
import type { ApiResponse, LiveMetrics } from '@/types';
// Import constants to calculate capacity
import { AVERAGE_FILE_SIZE_KIB, winstonToFiles } from '@/constants/pricing';

// CoinGecko IDs (for simple price fetch)
const CG_IDS = {
  AR: 'arweave',
};

async function getPrices() {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${CG_IDS.AR}&vs_currencies=usd`,
      {
        next: { revalidate: 300 }, // 5 min cache
        headers: { Accept: 'application/json' },
      }
    );
    if (!res.ok) throw new Error(`Price fetch failed: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error('Failed to fetch prices:', error);
    return {};
  }
}

export const runtime = 'edge';

// GitHub Stats Fetcher
async function getGithubStats() {
  try {
    const res = await fetch(
      'https://api.github.com/repos/decoyphrase/decoyphrase-desktop/releases/latest',
      {
        next: { revalidate: 3600 }, // 1 hour cache
        headers: { Accept: 'application/vnd.github.v3+json' },
      }
    );

    if (!res.ok) {
      if (res.status === 404) {
        // Repo not found or private (dev mode), return mocks silently
        return {
          windows: 0,
          macos: 0,
          linux: 0,
          android: 0,
        };
      }
      throw new Error(`GitHub fetch failed: ${res.status}`);
    }

    const data = await res.json();
    const assets = data.assets || [];

    const downloads = {
      windows: 0,
      macos: 0,
      linux: 0,
      android: 0,
    };

    interface GitHubAsset {
      name: string;
      download_count: number;
    }

    assets.forEach((asset: GitHubAsset) => {
      const name = asset.name.toLowerCase();
      const count = asset.download_count || 0;

      if (name.endsWith('.exe')) downloads.windows += count;
      else if (name.endsWith('.dmg') || name.endsWith('.pkg')) downloads.macos += count;
      else if (
        name.endsWith('.snap') ||
        name.endsWith('.deb') ||
        name.endsWith('.rpm') ||
        name.endsWith('.AppImage')
      )
        downloads.linux += count;
      else if (name.endsWith('.apk')) downloads.android += count;
    });

    return downloads;
  } catch (e) {
    console.error('GitHub Stats Error:', e);
    // Fallback to previous mock if live fetch fails (or 0)
    return {
      windows: 0,
      macos: 0,
      linux: 0,
      android: 0,
    };
  }
}

export async function GET(): Promise<NextResponse<ApiResponse<LiveMetrics>>> {
  try {
    // Fetch parallel: Arweave Graph + Balances + Prices + GitHub
    const [arweaveStats, balances, prices, githubStats] = await Promise.all([
      getArweaveStats(),
      BlockchainClient.getAllBalances(),
      getPrices(),
      getGithubStats(),
    ]);

    // Calculate Total Donations (Arweave GraphQL + Other chains if needed, but for now specific to Arweave)
    // The prompt asked to sum quantity.winston.
    // We convert Winston to AR for display.
    const totalDonationsAr = Number(arweaveStats.totalDonationsWinston) / 1e12;

    // Remaining Capacity Calculation
    // Logic: Wallet Balance (AR) -> Winston -> Files it can fund
    const remainingWinston = balances.storageBal * 1e12;
    const remainingFiles = winstonToFiles(remainingWinston);
    const remainingMB = (remainingFiles * AVERAGE_FILE_SIZE_KIB) / 1024; // KB -> MB

    const metrics: LiveMetrics = {
      totalUsers: arweaveStats.totalUsers, // Live unique donors/users
      totalFilesStored: arweaveStats.totalFiles,
      // Logic: For now, assume locked files are a subset or tracked differently.
      // If no tag distinguishes "locked" vs "generated", we might estimate or track via a different mechanism.
      // However, the prompt asked to "Fix Statistics".
      // If we assume "totalFiles" = all files generated & stored.
      // For "locked files", if we don't have a specific tag "Type: Locked", we can't know for sure from just "App-Name: DecoyPhrase".
      // Let's assume all files uploaded with this App-Name are "Decoy Mappings" which effectively lock the phrase.

      totalAppDownloads: {
        windows: githubStats.windows,
        macos: githubStats.macos,
        linux: githubStats.linux,
        android: githubStats.android,
        total: Object.values(githubStats).reduce((a, b) => a + Number(b), 0),
      },
      totalDonations: {
        arweave: totalDonationsAr,
        usdValue: totalDonationsAr * (prices[CG_IDS.AR]?.usd || 0),
      },
      remainingCapacity: {
        files: remainingFiles,
        megabytes: Math.round(remainingMB),
      },
      lastUpdated: Date.now(),
    };

    return NextResponse.json(
      {
        success: true,
        data: metrics,
        timestamp: Date.now(),
      },
      {
        headers: {
          'Cache-Control': `public, s-maxage=60, stale-while-revalidate`,
        },
      }
    );
  } catch (error) {
    console.error('Metrics API Error:', error);
    return NextResponse.json(
      {
        success: false,
        data: {
          totalUsers: 0,
          totalFilesStored: 0,

          totalAppDownloads: { windows: 0, macos: 0, linux: 0, android: 0, total: 0 },
          totalDonations: { arweave: 0, usdValue: 0 },
          remainingCapacity: { files: 0, megabytes: 0 },
          lastUpdated: 0,
        },
        error: {
          code: 'METRICS_ERROR',
          message: error instanceof Error ? error.message : 'Failed to fetch metrics',
        },
        timestamp: Date.now(),
      },
      { status: 500 }
    );
  }
}
