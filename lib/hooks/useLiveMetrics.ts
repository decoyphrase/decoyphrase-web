/**
 * useLiveMetrics Hook
 *
 * Real-time metrics data fetching via Short Polling (TanStack Query).
 * Replaces the previous SSE implementation for better reliability on Edge.
 */

import { useQuery } from '@tanstack/react-query';
import type { LiveMetrics } from '@/types';
import { fetchLiveMetrics } from '@/lib/services/metrics';

// =============================================================================
// Types
// =============================================================================

export type MetricsData = LiveMetrics;

interface UseLiveMetricsOptions {
  /** Polling interval in ms (default: 30000 = 30s) */
  pollingInterval?: number;
}

interface UseLiveMetricsReturn {
  data: MetricsData | null;
  isConnected: boolean; // Mapped to !isError for backward compatibility
  isReconnecting: boolean; // Mapped to isFetching for backward compatibility
  error: Error | null;
  lastUpdate: Date | null;
}

// =============================================================================
// Initial/Default Data
// =============================================================================

const INITIAL_DATA: MetricsData = {
  totalUsers: 0,
  totalFilesStored: 0,

  totalAppDownloads: {
    windows: 0,
    macos: 0,
    linux: 0,
    android: 0,
    total: 0,
  },
  totalDonations: {
    arweave: 0,
    usdValue: 0,
  },
  remainingCapacity: {
    files: 0,
    megabytes: 0,
  },
  lastUpdated: 0, // Changed to number to match LiveMetrics type
};

// =============================================================================
// Hook Implementation
// =============================================================================

export function useLiveMetrics(options: UseLiveMetricsOptions = {}): UseLiveMetricsReturn {
  const { pollingInterval = 30000 } = options;

  const { data, error, isFetching, isError } = useQuery<LiveMetrics, Error>({
    queryKey: ['metrics'],
    queryFn: () => fetchLiveMetrics(),
    refetchInterval: pollingInterval,
    // Keep data fresh for 29s to allow re-fetching just before 30s
    staleTime: pollingInterval - 1000,
    retry: 3,
  });

  const metricsData = data;


  return {
    data: metricsData ?? INITIAL_DATA,
    isConnected: !isError, // Simplified mapping: no error = "connected"
    isReconnecting: isFetching, // Fetching = "reconnecting" state visualization
    error: error as Error | null,
    lastUpdate: metricsData ? new Date(metricsData.lastUpdated) : null,
  };
}

export default useLiveMetrics;
