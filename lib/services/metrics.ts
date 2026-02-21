/**
 * Metrics Service (Client-side)
 * Aggregates live metrics from Arweave, GitHub, and CoinGecko.
 * Replaces the server-side API route for static export support.
 */

import { getArweaveStats } from './arweave-graphql';
import { BlockchainClient } from '@/lib/api/blockchain';
import type { LiveMetrics } from '@/types';
import { AVERAGE_FILE_SIZE_KIB, winstonToFiles } from '@/constants/pricing';

const CG_IDS = {
    AR: 'arweave',
};

async function getPrices() {
    try {
        const res = await fetch(
            `https://api.coingecko.com/api/v3/simple/price?ids=${CG_IDS.AR}&vs_currencies=usd`
        );
        if (!res.ok) throw new Error(`Price fetch failed: ${res.status}`);
        return await res.json();
    } catch (error) {
        console.error('Failed to fetch prices:', error);
        return {};
    }
}

async function getGithubStats() {
    try {
        const res = await fetch(
            'https://api.github.com/repos/decoyphrase/decoyphrase-app/releases/latest',
            {
                headers: { Accept: 'application/vnd.github.v3+json' },
            }
        );

        if (!res.ok) {
            return { windows: 0, macos: 0, linux: 0, android: 0 };
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

            if (name.includes('windows') || name.endsWith('.exe')) downloads.windows += count;
            else if (name.includes('macos') || name.endsWith('.dmg') || name.endsWith('.pkg'))
                downloads.macos += count;
            else if (name.includes('linux') || name.endsWith('.appimage') || name.endsWith('.deb'))
                downloads.linux += count;
            else if (name.includes('android') || name.endsWith('.apk')) downloads.android += count;
        });

        return downloads;
    } catch (e) {
        console.error('GitHub Stats Error:', e);
        return { windows: 0, macos: 0, linux: 0, android: 0 };
    }
}

export async function fetchLiveMetrics(): Promise<LiveMetrics> {
    // Fetch parallel: Arweave Graph + Balances + Prices + GitHub
    const [arweaveStats, balances, prices, githubStats] = await Promise.all([
        getArweaveStats(),
        BlockchainClient.getAllBalances(),
        getPrices(),
        getGithubStats(),
    ]);

    const totalDonationsAr = Number(arweaveStats.totalDonationsWinston) / 1e12;
    const remainingWinston = balances.storageBal * 1e12;
    const remainingFiles = winstonToFiles(remainingWinston);
    const remainingMB = (remainingFiles * AVERAGE_FILE_SIZE_KIB) / 1024;

    return {
        totalUsers: arweaveStats.totalUsers,
        totalFilesStored: arweaveStats.totalFiles,
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
}
