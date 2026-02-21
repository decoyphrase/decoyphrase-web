/**
 * API Types
 * Type definitions for external API responses
 */

/**
 * CoinGecko simple price response
 */
export interface CoinGeckoPriceResponse {
  [coinId: string]: {
    usd: number;
    usd_24h_change?: number;
    last_updated_at?: number;
  };
}

/**
 * AR token price data
 */
export interface ArTokenPrice {
  usd: number;
  change24h: number;
  lastUpdated: number;
}

/**
 * Live metrics aggregate
 */
export interface LiveMetrics {
  totalUsers: number;
  totalFilesStored: number;

  totalAppDownloads: {
    windows: number;
    macos: number;
    linux: number;
    android: number;
    total: number;
  };
  totalDonations: {
    arweave: number;
    usdValue: number;
  };
  remainingCapacity: {
    files: number;
    megabytes: number;
  };
  lastUpdated: number;
}

/**
 * Wallet balance aggregate
 */
export interface WalletBalances {
  storage: {
    address: string;
    balanceAr: number;
    balanceUsd: number;
  };
  team: {
    eth: { address: string; balance: number };
    sol: { address: string; balance: number };
    btc: { address: string; balance: number };
    base: { address: string; balance: number };
    sui: { address: string; balance: number };
    polygon: { address: string; balance: number };
  };
  totalUsd: number;
  lastUpdated: number;
}

/**
 * Download link structure
 */
export interface DownloadLink {
  platform: 'windows' | 'macos' | 'linux' | 'android';
  url: string;
  version: string;
  size: string;
  checksum?: string;
}
