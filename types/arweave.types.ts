/**
 * Arweave Types
 * Type definitions for Arweave blockchain interactions
 */

/**
 * Arweave wallet balance response
 */
export interface ArweaveBalance {
  /** Balance in Winston (smallest unit) */
  winston: string;
  /** Balance in AR tokens */
  ar: number;
}

/**
 * Arweave network info
 */
export interface ArweaveNetworkInfo {
  network: string;
  height: number;
  current: string;
  release: number;
  version: number;
}

/**
 * Arweave transaction status
 */
export interface ArweaveTransactionStatus {
  block_height: number;
  block_indep_hash: string;
  number_of_confirmations: number;
}

/**
 * Storage capacity calculation result
 */
export interface StorageCapacity {
  /** Total capacity in bytes */
  bytes: number;
  /** Total capacity in MB */
  megabytes: number;
  /** Total capacity in GB */
  gigabytes: number;
  /** Estimated number of files (assuming ~100KB per file) */
  estimatedFiles: number;
}

/**
 * Storage calculation input
 */
export interface StorageCalculationInput {
  /** Amount in USD */
  usdAmount: number;
  /** Current AR price in USD */
  arPriceUsd: number;
}

/**
 * Storage fund wallet info
 */
export interface StorageFundWallet {
  address: string;
  balance: ArweaveBalance;
  capacity: StorageCapacity;
  lastUpdated: number;
}

/**
 * Constants for storage calculations
 * Based on PRD formula: (Winstons / 875,585,286) = Capacity in Files
 */
export const WINSTON_PER_AR = 1_000_000_000_000; // 10^12
export const WINSTON_PER_FILE = 875_585_286; // ~100KB file
export const BYTES_PER_FILE = 100 * 1024; // 100KB
