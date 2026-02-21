'use client';

import Link from 'next/link';
import { DonationCard, StorageCalculator } from '@/components/features/donation';
import { STORAGE_FUND_WALLET, TEAM_FUND_WALLETS } from '@/constants/pricing';
import { useLanguageStore } from '@/lib/store/language';
import { useQuery } from '@tanstack/react-query';
import { fetchDonationData } from '@/lib/services/donations';

import { PageGradient } from '@/components/ui';

interface TeamBalanceDetails {
  code: string;
  balance: number;
  priceUsd: number;
  valueUsd: number;
}

interface DonationData {
  storage: {
    balance: number;
    usdValue: number;
    arPriceUsd: number;
  };
  team: {
    totalUsdValue: number;
    details: TeamBalanceDetails[];
  };
}

export function DonatePageContent() {
  const { t } = useLanguageStore();

  const { data } = useQuery<DonationData>({
    queryKey: ['donations'],
    queryFn: () => fetchDonationData(),
    // Refresh every 5 minutes (user-side)
    staleTime: 1000 * 60 * 5,
  });

  const storageBalance = data?.storage?.usdValue ?? 0;
  const teamBalance = data?.team?.totalUsdValue ?? 0;
  const arPrice = data?.storage?.arPriceUsd ?? 0;

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-12 sm:px-6 lg:px-10">
      <PageGradient />
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight uppercase md:text-5xl">
            {t.donate.title}
          </h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl leading-relaxed">
            {t.donate.description}
          </p>
          <Link
            href="/metrics"
            className="hover:text-muted-foreground mt-4 inline-block font-bold underline transition-colors"
          >
            {t.donate.link}
          </Link>
        </section>

        {/* Donation Cards Grid */}
        <section className="mb-12">
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            }}
          >
            {/* Storage Fund Card */}
            <DonationCard
              title={t.donate.cards.storage.title}
              description={t.donate.cards.storage.description}
              balance={storageBalance}
              wallet={STORAGE_FUND_WALLET}
              howToDonate={t.donate.cards.storage.howTo}
            />

            {/* Team Fund Card */}
            <DonationCard
              title={t.donate.cards.team.title}
              description={t.donate.cards.team.description}
              balance={teamBalance}
              wallet={TEAM_FUND_WALLETS[0]!}
              networks={TEAM_FUND_WALLETS}
              howToDonate={t.donate.cards.team.howTo}
            />
          </div>
        </section>

        {/* Storage Calculator */}
        <section className="mb-12">
          <StorageCalculator arPriceUsd={arPrice} />
        </section>

        {/* Info Footer */}
        <section className="border-border bg-card/50 rounded-none border border-dashed p-6">
          <div className="flex gap-4">
            {/* Warning Icon */}
            <div className="text-muted-foreground flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
            </div>

            {/* Info Text */}
            <div className="text-muted-foreground text-sm leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t.donate.info.p1 }} />
              <p className="mt-2">{t.donate.info.p2}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
