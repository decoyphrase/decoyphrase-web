/**
 * React Query Client Configuration
 * Centralized QueryClient setup with default options
 */

import { QueryClient } from '@tanstack/react-query';

/**
 * Create a new QueryClient instance with production-ready defaults
 */
export function createQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Stale time: 60 seconds before data is considered stale
        staleTime: 60 * 1000,

        // Garbage collection: 5 minutes after becoming unused
        gcTime: 5 * 60 * 1000,

        // Retry failed requests up to 3 times with exponential backoff
        retry: 3,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),

        // Don't refetch on window focus in production to reduce API calls
        refetchOnWindowFocus: process.env.NODE_ENV === 'development',

        // Keep previous data while fetching new data
        placeholderData: (previousData: unknown) => previousData,
      },
      mutations: {
        // Retry mutations once
        retry: 1,
      },
    },
  });
}

/**
 * Singleton QueryClient for client-side usage
 */
let browserQueryClient: QueryClient | undefined;

export function getQueryClient(): QueryClient {
  // Server: always create a new client
  if (typeof window === 'undefined') {
    return createQueryClient();
  }

  // Browser: reuse the same client
  if (!browserQueryClient) {
    browserQueryClient = createQueryClient();
  }
  return browserQueryClient;
}
