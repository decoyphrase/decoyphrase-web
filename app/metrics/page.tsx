/**
 * Live Metrics Page
 * @route /metrics
 *
 * Features:
 * - Bento Box grid layout with live counters
 * - Real-time data via SSE with auto-reconnect
 * - 60 FPS odometer animations using requestAnimationFrame
 * - Isolated component state to prevent full-page re-renders
 * - Skeleton loading and connection status indicators
 */

'use client';

import { memo, useState } from 'react';
import {
  useCounterAnimation,
  formatNumber,
  formatCompact,
  formatCurrency,
} from '@/lib/hooks/useCounterAnimation';
import { useLiveMetrics } from '@/lib/hooks/useLiveMetrics';
import { useLanguageStore } from '@/lib/store/language';
import { PageGradient } from '@/components/ui';

// =============================================================================
// Animated Counter Component (Isolated State)
// =============================================================================

interface AnimatedCounterProps {
  value: number;
  /** Number of decimal places */
  decimals?: number;
  /** Prefix (e.g., "$") */
  prefix?: string;
  /** Suffix (e.g., "K") */
  suffix?: string;
  /** Use compact format (K, M, B) */
  compact?: boolean;
  /** Animation duration in ms */
  duration?: number;
  /** CSS class for the number */
  className?: string;
}

const AnimatedCounter = memo(function AnimatedCounter({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  compact = false,
  duration = 1000,
  className = '',
}: AnimatedCounterProps) {
  const { displayValue, isAnimating } = useCounterAnimation(value, {
    duration,
    decimals,
  });

  const formattedValue = compact
    ? formatCompact(displayValue)
    : formatNumber(displayValue, decimals);

  return (
    <span className={`tabular-nums ${className} ${isAnimating ? 'opacity-90' : ''}`}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
});

// =============================================================================
// Metric Card Component
// =============================================================================

interface MetricCardProps {
  label: string;
  children: React.ReactNode;
  /** Secondary value (e.g., exact count) */
  secondary?: React.ReactNode;
  /** Label position */
  labelPosition?: 'top-right' | 'bottom-right';
  /** Additional CSS classes */
  className?: string;
}

function MetricCard({
  label,
  children,
  secondary,
  labelPosition = 'bottom-right',
  className = '',
}: MetricCardProps) {
  return (
    <div
      className={`group bg-card hover:bg-muted/50 relative flex flex-col justify-between p-6 transition-colors ${className}`}
    >
      {/* Label (Top Right) */}
      {labelPosition === 'top-right' && (
        <span className="text-muted-foreground absolute top-4 right-4 text-xs font-bold tracking-widest uppercase">
          {label}
        </span>
      )}

      {/* Main Content */}
      <div className="flex flex-1 flex-col justify-center">
        <div className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">{children}</div>

        {/* Secondary Value */}
        {secondary && <div className="text-muted-foreground mt-2 text-sm">{secondary}</div>}
      </div>

      {/* Label (Bottom Right) */}
      {labelPosition === 'bottom-right' && (
        <span className="text-muted-foreground mt-4 text-right text-xs font-bold tracking-widest uppercase">
          {label}
        </span>
      )}
    </div>
  );
}

// =============================================================================
// Skeleton Loader
// =============================================================================

function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-card animate-pulse p-6 ${className}`}>
      <div className="flex h-full flex-col justify-between">
        <div className="bg-muted h-12 w-24 rounded" />
        <div className="bg-muted mt-4 h-4 w-32 self-end rounded" />
      </div>
    </div>
  );
}

// =============================================================================
// Connection Status Indicator
// =============================================================================

function ConnectionStatus({
  isConnected,
  isReconnecting,
}: {
  isConnected: boolean;
  isReconnecting: boolean;
}) {
  const { t } = useLanguageStore();

  if (isConnected) {
    return (
      <span className="text-muted-foreground flex items-center gap-2 text-xs">
        <span className="h-2 w-2 rounded-full bg-green-500" />
        {t.metrics.status.live}
      </span>
    );
  }

  if (isReconnecting) {
    return (
      <span className="flex items-center gap-2 text-xs text-yellow-500">
        <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-500" />
        {t.metrics.status.reconnecting}
      </span>
    );
  }

  return (
    <span className="flex items-center gap-2 text-xs text-red-500">
      <span className="h-2 w-2 rounded-full bg-red-500" />
      {t.metrics.status.disconnected}
    </span>
  );
}

// =============================================================================
// Date Filter Control (Segmented Control)
// =============================================================================

import { DateRangePicker } from '@/components/features/metrics';

type DateFilter = 'D' | 'M' | 'Q' | 'Y' | 'All';

function DateFilterControl({
  value,
  onChange,
  onRangeSelect,
}: {
  value: DateFilter;
  onChange: (value: DateFilter) => void;
  onRangeSelect: (start: Date | null, end: Date | null) => void;
}) {
  const { t } = useLanguageStore();
  const [showPicker, setShowPicker] = useState(false);
  const [dateRangeStr, setDateRangeStr] = useState<string | null>(null);

  const options: { value: DateFilter; label: string }[] = [
    { value: 'D', label: t.metrics.filters.day },
    { value: 'M', label: t.metrics.filters.month },
    { value: 'Q', label: t.metrics.filters.quarter },
    { value: 'Y', label: t.metrics.filters.year },
    { value: 'All', label: t.metrics.filters.all },
  ];

  const handleApply = (start: Date | null, end: Date | null) => {
    if (start && end) {
      const startStr = start.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
      const endStr = end.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
      setDateRangeStr(`${startStr} - ${endStr}`);
      onRangeSelect(start, end);
    } else {
      setDateRangeStr(null);
    }
    setShowPicker(false);
  };

  return (
    <div className="relative flex flex-col items-end gap-2">
      <div className="border-border bg-muted flex items-center gap-1 rounded-none border p-1">
        {/* Calendar Icon */}
        <button
          onClick={() => setShowPicker(!showPicker)}
          className={`px-2 transition-colors ${
            showPicker ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
        </button>

        {/* Filter Options */}
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`px-3 py-1 text-xs font-bold tracking-widest uppercase transition-colors ${
              value === option.value
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {dateRangeStr && (
        <span className="text-muted-foreground animate-in fade-in slide-in-from-top-1 text-xs font-medium">
          {dateRangeStr}
        </span>
      )}

      {/* Date Picker Popover */}
      {showPicker && (
        <div className="absolute top-10 right-0 z-50">
          <DateRangePicker onApply={handleApply} onCancel={() => setShowPicker(false)} />
        </div>
      )}
    </div>
  );
}

// =============================================================================
// Main Page Component
// =============================================================================

export default function MetricsPage() {
  const [dateFilter, setDateFilter] = useState<DateFilter>('All');
  const { data, isConnected, isReconnecting } = useLiveMetrics();
  const { t } = useLanguageStore();

  const isLoading = !data || data.lastUpdated === 0;

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 lg:px-10">
      <PageGradient />
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <section className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight uppercase md:text-4xl">
              {t.metrics.title}
            </h1>
            <div className="mt-2">
              <ConnectionStatus isConnected={isConnected} isReconnecting={isReconnecting} />
            </div>
          </div>

          <DateFilterControl
            value={dateFilter}
            onChange={setDateFilter}
            onRangeSelect={(start, end) => {
              // Placeholder for future logic
              console.log('Range selected:', start, end);
            }}
          />
        </section>

        {/* Bento Box Grid */}
        <div className="border-border bg-border grid gap-[1px] border">
          {/* Row 1: KPIs (2 columns) */}
          <div className="grid grid-cols-1 gap-[1px] sm:grid-cols-2">
            {isLoading ? (
              <>
                <SkeletonCard />
                <SkeletonCard />
              </>
            ) : (
              <>
                <MetricCard label={t.metrics.labels.totalUsers}>
                  <AnimatedCounter value={data.totalUsers} />
                </MetricCard>

                <MetricCard label={t.metrics.labels.totalFilesStored}>
                  <AnimatedCounter value={data.totalFilesStored} />
                </MetricCard>
              </>
            )}
          </div>

          {/* Row 2: Downloads (4 columns) */}
          <div className="grid grid-cols-2 gap-[1px] lg:grid-cols-4">
            {isLoading ? (
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            ) : (
              <>
                <MetricCard
                  label="Windows"
                  labelPosition="top-right"
                  secondary={formatNumber(data.totalAppDownloads.windows)}
                >
                  <AnimatedCounter value={data.totalAppDownloads.windows} compact />
                </MetricCard>

                <MetricCard
                  label="macOS"
                  labelPosition="top-right"
                  secondary={formatNumber(data.totalAppDownloads.macos)}
                >
                  <AnimatedCounter value={data.totalAppDownloads.macos} compact />
                </MetricCard>

                <MetricCard
                  label="Linux"
                  labelPosition="top-right"
                  secondary={formatNumber(data.totalAppDownloads.linux)}
                >
                  <AnimatedCounter value={data.totalAppDownloads.linux} compact />
                </MetricCard>

                <MetricCard
                  label="Android"
                  labelPosition="top-right"
                  secondary={formatNumber(data.totalAppDownloads.android)}
                >
                  <AnimatedCounter value={data.totalAppDownloads.android} compact />
                </MetricCard>
              </>
            )}
          </div>

          {/* Row 2 Context Label */}
          <div className="bg-card text-muted-foreground px-6 py-2 text-right text-xs font-bold tracking-widest uppercase">
            {t.metrics.labels.downloadTotal}
          </div>

          {/* Row 3: Finance (2 columns) */}
          <div className="grid grid-cols-1 gap-[1px] sm:grid-cols-2">
            {isLoading ? (
              <>
                <SkeletonCard className="min-h-[160px]" />
                <SkeletonCard className="min-h-[160px]" />
              </>
            ) : (
              <>
                <MetricCard
                  label={t.metrics.labels.totalDonations}
                  className="min-h-[160px]"
                  secondary={formatCurrency(data.totalDonations.usdValue)}
                >
                  <AnimatedCounter value={data.totalDonations.usdValue} decimals={2} prefix="$" />
                </MetricCard>

                <MetricCard
                  label={t.metrics.labels.remainingCapacity}
                  className="min-h-[160px]"
                  secondary={formatNumber(data.remainingCapacity.files)}
                >
                  <AnimatedCounter value={data.remainingCapacity.files} />
                </MetricCard>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
