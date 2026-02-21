/**
 * Arweave API Route
 * Fetches wallet balance from Arweave network
 *
 * @route GET /api/arweave?address={walletAddress}
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { ARWEAVE_API, CACHE_TTL } from '@/constants';
import type { ApiResponse, ArweaveBalance } from '@/types';

export const runtime = 'edge';

export async function GET(
  request: NextRequest
): Promise<NextResponse<ApiResponse<ArweaveBalance>>> {
  const searchParams = request.nextUrl.searchParams;
  const address = searchParams.get('address');

  if (!address) {
    return NextResponse.json(
      {
        success: false,
        data: { winston: '0', ar: 0 },
        error: {
          code: 'MISSING_ADDRESS',
          message: 'Wallet address is required',
        },
        timestamp: Date.now(),
      },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(ARWEAVE_API.balance(address), {
      next: { revalidate: CACHE_TTL.balance },
    });

    if (!response.ok) {
      throw new Error(`Arweave API error: ${response.status}`);
    }

    const winstonBalance = await response.text();
    const arBalance = Number(winstonBalance) / 1_000_000_000_000;

    return NextResponse.json(
      {
        success: true,
        data: {
          winston: winstonBalance,
          ar: arBalance,
        },
        timestamp: Date.now(),
      },
      {
        headers: {
          'Cache-Control': `public, s-maxage=${CACHE_TTL.balance}, stale-while-revalidate`,
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        data: { winston: '0', ar: 0 },
        error: {
          code: 'ARWEAVE_ERROR',
          message: error instanceof Error ? error.message : 'Failed to fetch balance',
        },
        timestamp: Date.now(),
      },
      { status: 500 }
    );
  }
}
