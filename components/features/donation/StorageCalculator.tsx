/**
 * StorageCalculator Component
 * Interactive calculator for estimating storage capacity from donations
 *
 * Features:
 * - Reactive calculations (no button click needed)
 * - Input validation (no negative/non-numeric)
 * - USD → AR → Winston → Files conversion
 */

'use client';

import { useState, useMemo, useCallback } from 'react';
import { usdToAr, arToWinston, winstonToFiles, formatWinston } from '@/constants/pricing';
import { useLanguageStore } from '@/lib/store/language';
import { Tooltip } from '@/components/ui/Tooltip';

// =============================================================================
// Types
// =============================================================================

interface StorageCalculatorProps {
  /** Current AR price in USD (fetched from API) */
  arPriceUsd?: number;
}

// =============================================================================
// Main Component
// =============================================================================

export function StorageCalculator({ arPriceUsd = 7.14 }: StorageCalculatorProps) {
  const [usdAmount, setUsdAmount] = useState(1);
  const { t } = useLanguageStore();

  // Reactive calculations
  const calculations = useMemo(() => {
    const sanitizedUsd = Math.max(0, usdAmount || 0);
    const arAmount = usdToAr(sanitizedUsd, arPriceUsd);
    const winstonAmount = arToWinston(arAmount);
    const fileCount = winstonToFiles(winstonAmount);

    return {
      arAmount,
      winstonAmount,
      fileCount,
    };
  }, [usdAmount, arPriceUsd]);

  // Input validation handler
  const handleUsdChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow empty input for typing
    if (value === '') {
      setUsdAmount(0);
      return;
    }

    // Parse and validate
    const parsed = parseFloat(value);
    if (!isNaN(parsed) && parsed >= 0) {
      setUsdAmount(parsed);
    }
  }, []);

  return (
    <div className="bg-muted/50 border-border rounded-none border p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-bold tracking-tight uppercase">{t.donate.calculator}</h3>

        {/* Info Tooltip */}
        <Tooltip
          content={
            <ul className="space-y-1 text-xs">
              <li>1 Files = 100KB</li>
              <li>1 Files = 875,585,286 Winston</li>
              <li>1 AR = 1,000,000,000,000 Winston</li>
            </ul>
          }
        >
          <button
            type="button"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="View calculation details"
            title={t.donate.info.p1.replace(/<[^>]*>?/gm, '')} // Strip HTML for title
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M256 0C326.691 0 390.695 28.656 437.021 74.979C483.344 121.305 512 185.309 512 256C512 326.691 483.344 390.695 437.021 437.018C390.695 483.344 326.691 512 256 512C185.309 512 121.305 483.344 74.982 437.018C28.656 390.695 0 326.691 0 256C0 185.309 28.656 121.305 74.982 74.979C121.305 28.656 185.309 0 256 0ZM245.971 160.379C245.971 156.06 246.732 152.064 248.253 148.391C249.768 144.731 252.05 141.397 255.089 138.411C258.117 135.431 261.43 133.17 265.005 131.653C268.598 130.142 272.468 129.371 276.608 129.371C280.751 129.371 284.614 130.142 288.172 131.649C291.733 133.17 295 135.431 297.98 138.428C300.956 141.415 303.192 144.738 304.675 148.401C306.164 152.064 306.911 156.06 306.911 160.379C306.911 164.574 306.172 168.507 304.682 172.146C303.199 175.777 300.973 179.139 297.99 182.192C295.025 185.235 291.758 187.534 288.2 189.07C284.631 190.598 280.768 191.376 276.608 191.376C272.349 191.376 268.402 190.612 264.774 189.098C261.17 187.576 257.861 185.291 254.882 182.266C251.909 179.22 249.673 175.883 248.197 172.234C246.711 168.588 245.971 164.638 245.971 160.379ZM259.463 339.76C258.345 343.762 256.088 351.597 262.779 351.597C264.23 351.597 266.078 350.787 268.279 349.185C270.666 347.464 273.404 344.849 276.471 341.386C279.587 337.856 282.833 333.685 286.202 328.879C289.56 324.084 293.09 318.587 296.763 312.46C296.856 312.303 296.98 312.166 297.126 312.056C297.272 311.947 297.439 311.868 297.616 311.823C297.793 311.778 297.978 311.768 298.158 311.794C298.339 311.821 298.513 311.882 298.67 311.976L311.121 321.213C311.714 321.647 311.85 322.475 311.461 323.091C305.737 333.043 299.949 341.733 294.099 349.147C288.2 356.613 282.22 362.807 276.163 367.7L276.068 367.77C270.011 372.678 263.799 376.372 257.434 378.847C239.721 385.707 211.752 384.589 203.743 363.918C198.681 350.864 202.846 336.033 206.828 323.267L226.917 262.415C228.203 257.798 229.829 252.733 230.422 247.976C231.396 240.061 227.902 234.944 219.275 234.944H201.713C201.343 234.942 200.989 234.794 200.727 234.532C200.466 234.27 200.319 233.915 200.318 233.545L200.395 233.061L205.012 216.26C205.094 215.964 205.271 215.704 205.516 215.519C205.762 215.335 206.061 215.236 206.368 215.24L296.111 212.425C296.479 212.413 296.836 212.547 297.105 212.799C297.374 213.05 297.532 213.397 297.545 213.765L297.482 214.21L259.463 339.76ZM410.787 101.213C371.178 61.606 316.446 37.101 256 37.101C195.554 37.101 140.826 61.602 101.216 101.213C61.606 140.822 37.101 195.554 37.101 256C37.101 316.446 61.606 371.178 101.216 410.784C140.822 450.394 195.554 474.899 256 474.899C316.446 474.899 371.178 450.394 410.787 410.784C450.398 371.174 474.899 316.446 474.899 256C474.899 195.554 450.394 140.822 410.787 101.213Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </Tooltip>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left Side: Input Fields */}
        <div className="space-y-4">
          {/* USD Input */}
          <div>
            <label className="text-muted-foreground mb-1 block text-xs font-bold tracking-widest uppercase">
              {t.donate.labels.donationAmount}
            </label>
            <div className="border-border bg-background flex items-center rounded-none border">
              <span className="text-muted-foreground border-border border-r px-3 py-3 text-lg font-bold">
                $
              </span>
              <input
                type="number"
                min="0"
                step="0.01"
                value={usdAmount || ''}
                onChange={handleUsdChange}
                placeholder="1"
                className="placeholder:text-muted-foreground h-12 w-full bg-transparent px-4 text-lg font-bold outline-none"
                aria-label="USD donation amount"
              />
            </div>
          </div>

          {/* AR Conversion (Read-only) */}
          <div>
            <label className="text-muted-foreground mb-1 block text-xs font-bold tracking-widest uppercase">
              {t.donate.labels.arweaveEquivalent}
            </label>
            <div className="border-border bg-background flex items-center rounded-none border">
              <span className="text-muted-foreground flex items-center gap-2 border-r px-3 py-3">
                {/* Arweave Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <text
                    x="12"
                    y="16"
                    textAnchor="middle"
                    fontSize="10"
                    fill="var(--background)"
                    fontWeight="bold"
                  >
                    A
                  </text>
                </svg>
              </span>
              <input
                type="text"
                value={`${calculations.arAmount.toFixed(2)} AR`}
                readOnly
                className="text-muted-foreground h-12 w-full bg-transparent px-4 text-lg outline-none"
                aria-label="AR equivalent"
              />
            </div>
          </div>

          {/* Winston Conversion (Read-only) */}
          <div>
            <label className="text-muted-foreground mb-1 block text-xs font-bold tracking-widest uppercase">
              {t.donate.labels.winstonAmount}
            </label>
            <div className="border-border bg-background flex items-center rounded-none border">
              <input
                type="text"
                value={`${formatWinston(calculations.winstonAmount)} Winston`}
                readOnly
                className="text-muted-foreground h-12 w-full bg-transparent px-4 text-lg outline-none"
                aria-label="Winston equivalent"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Impact Display */}
        <div className="flex flex-col justify-center">
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
            {t.donate.labels.capacityIncrease}
          </p>

          <div className="bg-background border-border mb-4 rounded-none border p-6 text-center">
            <span className="block text-4xl font-bold lg:text-5xl">
              {calculations.fileCount.toLocaleString()}
            </span>
            <span className="text-muted-foreground mt-1 block text-sm font-bold tracking-widest uppercase">
              {t.donate.labels.files}
            </span>
          </div>

          {/* Calculate Button (optional, calculations are reactive) */}
          <button
            type="button"
            className="bg-foreground text-background hover:bg-foreground/80 w-full rounded-none py-3 text-sm font-bold tracking-widest uppercase transition-colors"
            onClick={() => {
              // Calculations are already reactive, this is just for UX
            }}
          >
            {t.donate.labels.calculate}
          </button>
        </div>
      </div>
    </div>
  );
}

export default StorageCalculator;
