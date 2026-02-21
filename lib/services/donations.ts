/**
 * Donation Service (Client-side)
 * Fetches multi-chain balances and prices for donation tracking.
 */

import { BlockchainClient } from '@/lib/api/blockchain';

const CG_IDS = {
  AR: 'arweave',
  SOL: 'solana',
  ETH: 'ethereum',
  BTC: 'bitcoin',
  SUI: 'sui',
  POLYGON: 'matic-network',
};

async function getPrices() {
  try {
    const ids = Object.values(CG_IDS).join(',');
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`
    );

    if (!res.ok) throw new Error(`Price fetch failed: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error('Failed to fetch prices:', error);
    return {};
  }
}

export async function fetchDonationData() {
  // Parallel fetch: Balances + Prices
  const [balances, prices] = await Promise.all([BlockchainClient.getAllBalances(), getPrices()]);

  // Calculate Storage Fund Value
  const arPrice = prices[CG_IDS.AR]?.usd || 0;
  const storageFundUsd = balances.storageBal * arPrice;

  // Calculate Team Fund Value
  let teamFundUsd = 0;

  const teamBalancesDetailed = balances.teamBalances.map((item) => {
    let price = 0;
    switch (item.code) {
      case 'SOL':
        price = prices[CG_IDS.SOL]?.usd || 0;
        break;
      case 'ETH':
      case 'BASE':
        price = prices[CG_IDS.ETH]?.usd || 0;
        break;
      case 'BTC':
        price = prices[CG_IDS.BTC]?.usd || 0;
        break;
      case 'SUI':
        price = prices[CG_IDS.SUI]?.usd || 0;
        break;
      case 'POLYGON':
        price = prices[CG_IDS.POLYGON]?.usd || 0;
        break;
    }

    const usdValue = item.balance * price;
    teamFundUsd += usdValue;

    return {
      ...item,
      priceUsd: price,
      valueUsd: usdValue,
    };
  });

  return {
    storage: {
      balance: balances.storageBal,
      usdValue: storageFundUsd,
      arPriceUsd: arPrice,
    },
    team: {
      totalUsdValue: teamFundUsd,
      details: teamBalancesDetailed,
    },
    timestamp: Date.now(),
  };
}
