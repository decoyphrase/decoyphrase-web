/**
 * CoinGecko API Route
 * Fetches cryptocurrency prices
 *
 * @route GET /api/coingecko?coins={coinIds}
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { COINGECKO_API, CACHE_TTL } from '@/constants';
import type { ApiResponse, ArTokenPrice } from '@/types';

export const runtime = 'edge';

export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse<ArTokenPrice>>> {
  const searchParams = request.nextUrl.searchParams;
  const coins = searchParams.get('coins') ?? 'arweave';

  try {
    const url = new URL(`${COINGECKO_API.baseUrl}${COINGECKO_API.simplePrice}`);
    url.searchParams.set('ids', coins);
    url.searchParams.set('vs_currencies', 'usd');
    url.searchParams.set('include_24hr_change', 'true');
    url.searchParams.set('include_last_updated_at', 'true');

    const response = await fetch(url.toString(), {
      next: { revalidate: CACHE_TTL.price },
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.status}`);
    }

    const data = (await response.json()) as Record<
      string,
      { usd: number; usd_24h_change?: number; last_updated_at?: number }
    >;

    const arweaveData = data['arweave'];

    if (!arweaveData) {
      throw new Error('Arweave price data not found');
    }

    return NextResponse.json(
      {
        success: true,
        data: {
          usd: arweaveData.usd,
          change24h: arweaveData.usd_24h_change ?? 0,
          lastUpdated: arweaveData.last_updated_at ?? Date.now(),
        },
        timestamp: Date.now(),
      },
      {
        headers: {
          'Cache-Control': `public, s-maxage=${CACHE_TTL.price}, stale-while-revalidate`,
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        data: { usd: 0, change24h: 0, lastUpdated: 0 },
        error: {
          code: 'COINGECKO_ERROR',
          message: error instanceof Error ? error.message : 'Failed to fetch price',
        },
        timestamp: Date.now(),
      },
      { status: 500 }
    );
  }
}
