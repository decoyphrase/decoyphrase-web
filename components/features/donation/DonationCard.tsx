/**
 * DonationCard Component
 * Reusable card for Storage Fund and Team Fund donations
 *
 * Features:
 * - Click-to-copy with visual feedback (icon → ✔ for 2s)
 * - Truncated address display for mobile
 * - Network selector for Team Fund
 * - Expandable "How to Donate?" accordion
 */

'use client';

import { useState, memo } from 'react';
import { useCopyToClipboard } from '@/lib/hooks';
import type { NetworkConfig } from '@/constants/pricing';
import { useLanguageStore } from '@/lib/store/language';

// =============================================================================
// Types
// =============================================================================

interface DonationCardProps {
  /** Card title (e.g., "Storage Fund") */
  title: string;
  /** Card description */
  description: string;
  /** Current balance in USD */
  balance: number;
  /** Primary wallet configuration */
  wallet: NetworkConfig;
  /** Additional network options (for Team Fund) */
  networks?: NetworkConfig[];
  /** "How to Donate" content */
  howToDonate?: string;
}

// =============================================================================
// Subcomponents
// =============================================================================

/** Truncate address for display (keeps full for copy) */
function truncateAddress(address: string, chars = 6): string {
  if (address.length <= chars * 2 + 3) return address;
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}

/** Copy Icon (transforms to checkmark when copied) */
function CopyIcon({ copied }: { copied: boolean }) {
  if (copied) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-green-500"
        aria-hidden="true"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

/** Chevron Icon for accordion */
function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

// =============================================================================
// Main Component
// =============================================================================

export const DonationCard = memo(function DonationCard({
  title,
  description,
  balance,
  wallet,
  networks,
  howToDonate,
}: DonationCardProps) {
  const [selectedNetwork, setSelectedNetwork] = useState(wallet);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const { copied, copy } = useCopyToClipboard(2000);
  const { t } = useLanguageStore();

  const currentWallet = networks
    ? networks.find((n) => n.code === selectedNetwork.code) || wallet
    : wallet;

  const handleCopy = async () => {
    await copy(currentWallet.address);
  };

  return (
    <div className="border-border bg-card flex flex-col rounded-none border p-6">
      {/* Header */}
      <h3 className="border-border mb-4 border-b pb-2 text-lg font-bold tracking-tight uppercase">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{description}</p>

      {/* Balance Display */}
      <div className="bg-muted mb-6 rounded-none p-4">
        <span className="text-muted-foreground block text-xs font-bold tracking-widest uppercase">
          {t.donate.labels.currentBalance}
        </span>
        <span className="mt-1 block text-3xl font-bold">${balance.toLocaleString()}</span>
      </div>

      {/* Wallet Address Section */}
      <div className="mb-4">
        <div className="mb-2 flex items-center justify-between">
          <label className="text-xs font-bold tracking-widest uppercase">
            {currentWallet.label}
          </label>

          {/* Network Selector (only for Team Fund with multiple networks) */}
          {networks && networks.length > 1 && (
            <div className="relative">
              <select
                value={selectedNetwork.code}
                onChange={(e) => {
                  const selected = networks.find((n) => n.code === e.target.value);
                  if (selected) setSelectedNetwork(selected);
                }}
                className="border-border bg-muted focus:border-foreground cursor-pointer appearance-none rounded-none border py-1 pr-8 pl-3 text-xs font-bold uppercase focus:outline-none"
                aria-label={t.donate.labels.selectNetwork}
              >
                {networks.map((network) => (
                  <option key={network.code} value={network.code}>
                    {network.name}
                  </option>
                ))}
              </select>
              <div className="text-muted-foreground pointer-events-none absolute top-1/2 right-2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Address Input with Copy Button */}
        <div className="border-border bg-muted flex items-center gap-2 rounded-none border p-3">
          <input
            type="text"
            value={truncateAddress(currentWallet.address, 8)}
            readOnly
            className="min-w-0 flex-1 bg-transparent font-mono text-sm outline-none"
            aria-label={t.donate.labels.walletAddress}
          />
          <button
            type="button"
            onClick={handleCopy}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCopy();
              }
            }}
            className="hover:bg-foreground/10 relative flex-shrink-0 rounded-none p-2 transition-colors"
            aria-label={copied ? t.donate.labels.addressCopied : t.donate.labels.copyAddress}
            title={copied ? t.donate.labels.copied : t.donate.labels.copyAddress}
          >
            <CopyIcon copied={copied} />

            {/* Tooltip */}
            {copied && (
              <span className="bg-foreground text-background absolute -top-8 left-1/2 -translate-x-1/2 rounded px-2 py-1 text-xs whitespace-nowrap">
                {t.donate.labels.copied}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* How to Donate Accordion */}
      <div className="border-border mt-auto border-t pt-4">
        <button
          type="button"
          onClick={() => setIsAccordionOpen(!isAccordionOpen)}
          className="hover:text-muted-foreground flex w-full items-center justify-between text-left text-sm font-bold tracking-widest uppercase transition-colors"
          aria-expanded={isAccordionOpen}
        >
          {t.donate.labels.howToDonate}
          <ChevronIcon isOpen={isAccordionOpen} />
        </button>

        {isAccordionOpen && (
          <div
            className="text-muted-foreground mt-3 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: howToDonate ?? 'Send cryptocurrency...' }}
          />
        )}
      </div>
    </div>
  );
});

export default DonationCard;
