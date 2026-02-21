/**
 * Query Keys Factory
 * Centralized query key management for React Query
 *
 * Benefits:
 * - Type-safe query keys
 * - Easy cache invalidation
 * - Consistent key structure
 */

/**
 * Query key factory pattern
 * @see https://tkdodo.eu/blog/effective-react-query-keys
 */
export const queryKeys = {
  // Arweave related queries
  arweave: {
    all: ['arweave'] as const,
    balance: (address: string) => [...queryKeys.arweave.all, 'balance', address] as const,
    network: () => [...queryKeys.arweave.all, 'network'] as const,
  },

  // Price related queries
  price: {
    all: ['price'] as const,
    ar: () => [...queryKeys.price.all, 'ar'] as const,
    multi: (coins: string[]) => [...queryKeys.price.all, 'multi', ...coins] as const,
  },

  // Metrics queries
  metrics: {
    all: ['metrics'] as const,
    live: () => [...queryKeys.metrics.all, 'live'] as const,
    wallets: () => [...queryKeys.metrics.all, 'wallets'] as const,
    capacity: () => [...queryKeys.metrics.all, 'capacity'] as const,
  },

  // User/Downloads queries
  downloads: {
    all: ['downloads'] as const,
    count: () => [...queryKeys.downloads.all, 'count'] as const,
    links: () => [...queryKeys.downloads.all, 'links'] as const,
  },
} as const;

/**
 * Extract query key type for type-safe usage
 */
export type QueryKeys = typeof queryKeys;
