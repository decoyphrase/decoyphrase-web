/**
 * API Endpoints
 * External API URLs and configurations
 */

/**
 * Arweave Gateway
 */
export const ARWEAVE_GATEWAY = process.env['NEXT_PUBLIC_ARWEAVE_GATEWAY'] ?? 'https://arweave.net';

/**
 * Arweave API endpoints
 */
export const ARWEAVE_API = {
  balance: (address: string) => `${ARWEAVE_GATEWAY}/wallet/${address}/balance`,
  networkInfo: `${ARWEAVE_GATEWAY}/info`,
  transaction: (txId: string) => `${ARWEAVE_GATEWAY}/tx/${txId}/status`,
} as const;

/**
 * CoinGecko API
 */
export const COINGECKO_API = {
  baseUrl: 'https://api.coingecko.com/api/v3',
  simplePrice: '/simple/price',
} as const;

/**
 * Coin IDs for CoinGecko
 */
export const COIN_IDS = {
  arweave: 'arweave',
  ethereum: 'ethereum',
  solana: 'solana',
  bitcoin: 'bitcoin',
} as const;

/**
 * Internal API routes
 */
export const INTERNAL_API = {
  arweaveBalance: '/api/arweave',
  arPrice: '/api/coingecko',
  feedback: '/api/feedback',
  metrics: '/api/metrics',
} as const;

/**
 * Cache TTL values (in seconds)
 */
export const CACHE_TTL = {
  /** Price data - refresh every 60 seconds */
  price: 60,
  /** Wallet balance - refresh every 60 seconds */
  balance: 60,
  /** Metrics - refresh every 30 seconds */
  metrics: 30,
  /** Static content - 1 hour */
  static: 3600,
} as const;
