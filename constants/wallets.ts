/**
 * Wallet Addresses
 * All cryptocurrency wallet addresses for donations
 */

/**
 * Storage wallet (Arweave) - funds permanent storage endowment
 */
export const STORAGE_WALLET = {
  address: process.env['NEXT_PUBLIC_STORAGE_WALLET_ADDRESS'] ?? '',
  chain: 'arweave',
  name: 'Storage Fund',
} as const;

/**
 * Team wallets - multi-chain support for development funding
 */
export const TEAM_WALLETS = {
  eth: {
    address: process.env['NEXT_PUBLIC_TEAM_WALLET_ETH'] ?? '',
    chain: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
  },
  sol: {
    address: process.env['NEXT_PUBLIC_TEAM_WALLET_SOL'] ?? '',
    chain: 'solana',
    name: 'Solana',
    symbol: 'SOL',
  },
  btc: {
    address: process.env['NEXT_PUBLIC_TEAM_WALLET_BTC'] ?? '',
    chain: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
  },
  base: {
    address: process.env['NEXT_PUBLIC_TEAM_WALLET_BASE'] ?? '',
    chain: 'base',
    name: 'Base',
    symbol: 'ETH',
  },
  sui: {
    address: process.env['NEXT_PUBLIC_TEAM_WALLET_SUI'] ?? '',
    chain: 'sui',
    name: 'Sui',
    symbol: 'SUI',
  },
  polygon: {
    address: process.env['NEXT_PUBLIC_TEAM_WALLET_POLYGON'] ?? '',
    chain: 'polygon',
    name: 'Polygon',
    symbol: 'MATIC',
  },
} as const;

export type TeamWalletKey = keyof typeof TEAM_WALLETS;
