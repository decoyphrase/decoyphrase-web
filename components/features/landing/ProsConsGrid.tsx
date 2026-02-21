'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { backupMethods, criteriaLabels } from './proscons-data';

/**
 * ProsConsGrid - Master-Detail comparison component
 * Top: 2x5 Interactive Grid ("Master")
 * Bottom: Dynamic Detail Panel ("Detail")
 */
import { useLanguageStore } from '@/lib/store/language';
import { PageGradient } from '@/components/ui';

export function ProsConsGrid() {
  const [selectedId, setSelectedId] = useState<string>(backupMethods[0]!.id);
  const { t } = useLanguageStore();

  // Find the currently selected backup method data
  const selectedMethod = backupMethods.find((m) => m.id === selectedId) ?? backupMethods[0]!;
  const criteriaKeys = Object.keys(criteriaLabels) as (keyof typeof criteriaLabels)[];

  return (
    <section className="bg-background relative overflow-hidden py-20">
      <PageGradient />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-foreground mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {t.prosCons.title}
          </h2>
          <p className="text-muted-foreground">{t.prosCons.subtitle}</p>
        </motion.div>

        {/* Master: Interactive Grid Selection */}
        <div className="mb-0 grid grid-cols-2 gap-px overflow-hidden rounded-t-xl bg-neutral-800/50 md:grid-cols-5">
          {backupMethods.map((method) => {
            const isSelected = selectedId === method.id;
            // Get translated name safely, fallback to method.name (English) if key missing
            // We assume method.id matches keys in translations
            const translatedName = t.prosCons.methods[method.id]?.name || method.name;

            return (
              <button
                key={method.id}
                onClick={() => setSelectedId(method.id)}
                className={`group relative flex h-32 flex-col items-center justify-center p-4 transition-all duration-300 hover:bg-neutral-800 ${
                  isSelected ? 'z-10 bg-neutral-800' : 'bg-neutral-950/30'
                }`}
              >
                {/* Active Indicator Gradient Overlay */}
                {isSelected && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-800/50" />
                )}

                {/* Active Border/Glow effect */}
                {isSelected && (
                  <motion.div
                    layoutId="active-selection"
                    className="absolute inset-0 border-2 border-neutral-600/50 bg-neutral-700/10 shadow-[inner_0_0_20px_rgba(255,255,255,0.05)]"
                    transition={{ duration: 0.2 }}
                  />
                )}

                <span
                  className={`relative z-10 text-center text-sm font-medium transition-colors duration-200 ${
                    isSelected
                      ? 'text-foreground font-bold'
                      : 'text-muted-foreground group-hover:text-foreground/80'
                  }`}
                >
                  {translatedName}
                </span>

                {/* Cursor Icon for interactivity hint if needed, or just rely on hover/active states */}
              </button>
            );
          })}
        </div>

        {/* Detail: Dynamic Attributes Panel */}
        <div className="overflow-hidden rounded-b-xl border-t border-neutral-800 bg-neutral-900/50">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col"
            >
              {criteriaKeys.map((key) => {
                const criteria = selectedMethod.criteria[key];
                const isPro = criteria.status === 'pro';

                // Get translated criteria text
                const translatedCriteriaLabel = t.prosCons.criteriaLabels[key];
                // Accessing method criteria text by key.
                // t.prosCons.methods[selectedId].criteria[key]
                const translatedCriteriaText =
                  t.prosCons.methods[selectedId]?.criteria[key] || criteria.text;

                return (
                  <div
                    key={key}
                    className={`flex flex-col border-b border-neutral-900/50 p-4 last:border-0 sm:flex-row sm:items-center ${
                      isPro
                        ? 'bg-green-950/40 text-green-100 hover:bg-green-900/40' // Darker green background
                        : 'bg-red-950/40 text-red-100 hover:bg-red-900/40' // Darker red background
                    } transition-colors duration-200`}
                  >
                    {/* Label Column */}
                    <div className="mb-2 min-w-[200px] font-semibold sm:mb-0 sm:border-r sm:border-white/10 sm:pr-6">
                      {translatedCriteriaLabel}
                    </div>

                    {/* Description Column */}
                    <div className="flex-1 text-sm font-medium opacity-90 sm:pl-6">
                      {translatedCriteriaText}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
