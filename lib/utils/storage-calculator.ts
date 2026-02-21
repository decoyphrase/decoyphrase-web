/**
 * Storage Calculator
 * Utility functions for Arweave storage capacity calculations
 *
 * Based on PRD formula: (Winstons / 875,585,286) = Capacity in Files (~100KB each)
 */

import { WINSTON_PER_AR, WINSTON_PER_FILE, BYTES_PER_FILE } from '@/types/arweave.types';
import type { StorageCapacity, StorageCalculationInput } from '@/types/arweave.types';

/**
 * Convert AR tokens to Winston (smallest unit)
 */
export function arToWinston(ar: number): bigint {
  return BigInt(Math.floor(ar * WINSTON_PER_AR));
}

/**
 * Convert Winston to AR tokens
 */
export function winstonToAr(winston: bigint | string): number {
  const winstonBigInt = typeof winston === 'string' ? BigInt(winston) : winston;
  return Number(winstonBigInt) / WINSTON_PER_AR;
}

/**
 * Calculate storage capacity from Winston amount
 */
export function calculateStorageCapacity(winston: bigint | string): StorageCapacity {
  const winstonBigInt = typeof winston === 'string' ? BigInt(winston) : winston;
  const winstonNumber = Number(winstonBigInt);

  const estimatedFiles = Math.floor(winstonNumber / WINSTON_PER_FILE);
  const bytes = estimatedFiles * BYTES_PER_FILE;

  return {
    bytes,
    megabytes: bytes / (1024 * 1024),
    gigabytes: bytes / (1024 * 1024 * 1024),
    estimatedFiles,
  };
}

/**
 * Calculate how much storage a USD donation provides
 */
export function calculateDonationCapacity(input: StorageCalculationInput): StorageCapacity & {
  arAmount: number;
  winstonAmount: bigint;
} {
  const { usdAmount, arPriceUsd } = input;

  // Convert USD to AR
  const arAmount = usdAmount / arPriceUsd;

  // Convert AR to Winston
  const winstonAmount = arToWinston(arAmount);

  // Calculate storage capacity
  const capacity = calculateStorageCapacity(winstonAmount);

  return {
    ...capacity,
    arAmount,
    winstonAmount,
  };
}

/**
 * Calculate remaining file capacity from wallet balance
 */
export function calculateRemainingCapacity(balanceWinston: string): {
  remainingFiles: number;
  remainingMb: number;
} {
  const capacity = calculateStorageCapacity(balanceWinston);

  return {
    remainingFiles: capacity.estimatedFiles,
    remainingMb: capacity.megabytes,
  };
}

/**
 * Format storage amount for display
 */
export function formatStorageAmount(capacity: StorageCapacity): string {
  if (capacity.gigabytes >= 1) {
    return `${capacity.gigabytes.toFixed(2)} GB`;
  }
  if (capacity.megabytes >= 1) {
    return `${capacity.megabytes.toFixed(2)} MB`;
  }
  return `${Math.floor(capacity.bytes / 1024)} KB`;
}
