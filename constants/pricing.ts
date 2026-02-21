/**
 * Pricing & Conversion Constants
 * Used for donation calculator and storage estimation
 */

// =============================================================================
// Arweave Conversion Constants
// =============================================================================

/** 1 AR = 1 trillion Winston */
export const WINSTON_PER_AR = 1_000_000_000_000;

/** Average Winston cost per file (based on ~50 KiB mapping file) */
export const WINSTON_PER_FILE = 875_585_286;

/** Average file size in KiB for a 12-word seed phrase mapping */
export const AVERAGE_FILE_SIZE_KIB = 50;

// =============================================================================
// Network Wallet Addresses
// =============================================================================

export type NetworkCode = 'AR' | 'SOL' | 'ETH' | 'BASE' | 'BTC' | 'SUI' | 'POLYGON';

export interface NetworkConfig {
  code: NetworkCode;
  name: string;
  address: string;
  label: string;
}

/** Arweave Storage Fund Wallet */
export const STORAGE_FUND_WALLET: NetworkConfig = {
  code: 'AR',
  name: 'Arweave',
  address: 'xDvJOjfTGLW74jS5Khct1pa_hhc_FiF63rZeFC7IH8Q',
  label: 'Arweave Wallet Address',
};

/** Team Fund Wallets (Multi-Chain) */
export const TEAM_FUND_WALLETS: NetworkConfig[] = [
  {
    code: 'SOL',
    name: 'Solana',
    address: '2rfkLCdAdZ2Z49BW6XiwSpkr6sLg2axXWQLKxG6asqZp',
    label: 'Solana Wallet Address',
  },
  {
    code: 'ETH',
    name: 'Ethereum',
    address: '0x9F527D73BA59346B595f7154E30d38F5eFa8745D',
    label: 'Ethereum Wallet Address',
  },
  {
    code: 'BASE',
    name: 'Base',
    address: '0x9F527D73BA59346B595f7154E30d38F5eFa8745D',
    label: 'Base Wallet Address',
  },
  {
    code: 'BTC',
    name: 'Bitcoin',
    address: 'bc1qs6yjzhc9rg9vp076mphf2fn02lpyzl5m4rt9gg',
    label: 'Bitcoin Wallet Address',
  },
  {
    code: 'SUI',
    name: 'Sui',
    address: '0xfcfc43d4c2a604d0fddff3810f76783127f8f5a8e64472d0f7706ef94796e945',
    label: 'Sui Wallet Address',
  },
  {
    code: 'POLYGON',
    name: 'Polygon',
    address: '0x9F527D73BA59346B595f7154E30d38F5eFa8745D',
    label: 'Polygon Wallet Address',
  },
];

// =============================================================================
// Calculator Helper Functions
// =============================================================================

/**
 * Convert USD to AR amount
 */
export function usdToAr(usdAmount: number, arPriceUsd: number): number {
  if (arPriceUsd <= 0) return 0;
  return usdAmount / arPriceUsd;
}

/**
 * Convert AR to Winston
 */
export function arToWinston(arAmount: number): number {
  return arAmount * WINSTON_PER_AR;
}

/**
 * Calculate file storage capacity from Winston amount
 */
export function winstonToFiles(winstonAmount: number): number {
  return Math.floor(winstonAmount / WINSTON_PER_FILE);
}

/**
 * Format Winston to human-readable (T = Trillion)
 */
export function formatWinston(winston: number): string {
  if (winston >= 1e12) {
    return `${(winston / 1e12).toFixed(1)} T`;
  }
  if (winston >= 1e9) {
    return `${(winston / 1e9).toFixed(1)} B`;
  }
  if (winston >= 1e6) {
    return `${(winston / 1e6).toFixed(1)} M`;
  }
  return winston.toLocaleString();
}
