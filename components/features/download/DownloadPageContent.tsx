'use client';

import { PlatformCard } from '@/components/features/download';
import { platforms } from '@/lib/data/platforms';
import { SOCIAL_LINKS } from '@/constants/links';
import { useLanguageStore } from '@/lib/store/language';
import { PageGradient } from '@/components/ui';

export function DownloadPageContent() {
  const { t } = useLanguageStore();

  return (
    <main className="relative min-h-screen overflow-hidden">
      <PageGradient />
      {/* Hero Section */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          {/* Title */}
          <h1 className="font-mono text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
            {t.download.title}
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground mt-6 max-w-2xl leading-relaxed">
            {t.download.subtitle}
          </p>
        </div>
      </section>

      {/* Platform Cards Grid */}
      <section className="relative z-10 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform) => (
              <PlatformCard key={platform.id} platform={platform} />
            ))}
          </div>
        </div>
      </section>

      {/* Secondary CTAs */}
      <section className="relative z-10 px-4 py-16 sm:py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 sm:flex-row">
          {/* About Decoy Generator */}
          <a
            href="https://decoy-phrase.gitbook.io/documentation-decoy-phrase/products-and-features/decoy-phrase-generator"
            target="_blank"
            rel="noopener noreferrer"
            className="border-border bg-card hover:bg-muted inline-flex items-center justify-center rounded-full border px-8 py-4 font-medium transition-colors"
          >
            {t.download.cta.about}
          </a>

          {/* Watch Tutorials */}
          <a
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-medium transition-colors"
          >
            <PlayIcon />
            {t.download.cta.tutorials}
          </a>
        </div>
      </section>
    </main>
  );
}

function PlayIcon() {
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
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
    </svg>
  );
}
