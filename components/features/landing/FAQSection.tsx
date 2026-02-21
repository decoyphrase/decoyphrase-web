'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguageStore } from '@/lib/store/language';
import { PageGradient } from '@/components/ui';

// FAQ Categories
type FAQCategory = 'general' | 'products' | 'security';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
}

/**
 * Accordion Item Component
 */
function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-muted border-b border-white/10 last:border-0">
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between py-5 text-left transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-foreground pr-8 text-sm font-bold lg:text-base">{item.question}</span>
        <span className="text-muted-foreground group-hover:text-foreground flex-shrink-0 transition-colors">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground max-w-2xl pb-6 text-sm leading-relaxed whitespace-pre-wrap">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * FAQSection - Accordion with category tabs
 */
export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('general');
  const [openItemId, setOpenItemId] = useState<string | null>(null);
  const { t } = useLanguageStore();

  const FAQ_DATA: FAQItem[] = [
    // General
    {
      id: 'gen-1',
      question: t.faq.items['gen-1']?.question ?? '',
      answer: t.faq.items['gen-1']?.answer ?? '',
      category: 'general',
    },
    {
      id: 'gen-2',
      question: t.faq.items['gen-2']?.question ?? '',
      answer: t.faq.items['gen-2']?.answer ?? '',
      category: 'general',
    },
    {
      id: 'gen-3',
      question: t.faq.items['gen-3']?.question ?? '',
      answer: t.faq.items['gen-3']?.answer ?? '',
      category: 'general',
    },
    {
      id: 'gen-4',
      question: t.faq.items['gen-4']?.question ?? '',
      answer: t.faq.items['gen-4']?.answer ?? '',
      category: 'general',
    },
    {
      id: 'gen-5',
      question: t.faq.items['gen-5']?.question ?? '',
      answer: t.faq.items['gen-5']?.answer ?? '',
      category: 'general',
    },
    {
      id: 'gen-6',
      question: t.faq.items['gen-6']?.question ?? '',
      answer: t.faq.items['gen-6']?.answer ?? '',
      category: 'general',
    },
    {
      id: 'gen-7',
      question: t.faq.items['gen-7']?.question ?? '',
      answer: t.faq.items['gen-7']?.answer ?? '',
      category: 'general',
    },
    {
      id: 'gen-8',
      question: t.faq.items['gen-8']?.question ?? '',
      answer: t.faq.items['gen-8']?.answer ?? '',
      category: 'general',
    },
    {
      id: 'gen-9',
      question: t.faq.items['gen-9']?.question ?? '',
      answer: t.faq.items['gen-9']?.answer ?? '',
      category: 'general',
    },
    // Products
    {
      id: 'prod-1',
      question: t.faq.items['prod-1']?.question ?? '',
      answer: t.faq.items['prod-1']?.answer ?? '',
      category: 'products',
    },
    {
      id: 'prod-2',
      question: t.faq.items['prod-2']?.question ?? '',
      answer: t.faq.items['prod-2']?.answer ?? '',
      category: 'products',
    },
    {
      id: 'prod-3',
      question: t.faq.items['prod-3']?.question ?? '',
      answer: t.faq.items['prod-3']?.answer ?? '',
      category: 'products',
    },
    {
      id: 'prod-4',
      question: t.faq.items['prod-4']?.question ?? '',
      answer: t.faq.items['prod-4']?.answer ?? '',
      category: 'products',
    },
    {
      id: 'prod-5',
      question: t.faq.items['prod-5']?.question ?? '',
      answer: t.faq.items['prod-5']?.answer ?? '',
      category: 'products',
    },
    {
      id: 'prod-6',
      question: t.faq.items['prod-6']?.question ?? '',
      answer: t.faq.items['prod-6']?.answer ?? '',
      category: 'products',
    },
    // Security
    {
      id: 'sec-1',
      question: t.faq.items['sec-1']?.question ?? '',
      answer: t.faq.items['sec-1']?.answer ?? '',
      category: 'security',
    },
    {
      id: 'sec-2',
      question: t.faq.items['sec-2']?.question ?? '',
      answer: t.faq.items['sec-2']?.answer ?? '',
      category: 'security',
    },
    {
      id: 'sec-3',
      question: t.faq.items['sec-3']?.question ?? '',
      answer: t.faq.items['sec-3']?.answer ?? '',
      category: 'security',
    },
    {
      id: 'sec-4',
      question: t.faq.items['sec-4']?.question ?? '',
      answer: t.faq.items['sec-4']?.answer ?? '',
      category: 'security',
    },
    {
      id: 'sec-5',
      question: t.faq.items['sec-5']?.question ?? '',
      answer: t.faq.items['sec-5']?.answer ?? '',
      category: 'security',
    },
    {
      id: 'sec-6',
      question: t.faq.items['sec-6']?.question ?? '',
      answer: t.faq.items['sec-6']?.answer ?? '',
      category: 'security',
    },
    {
      id: 'sec-7',
      question: t.faq.items['sec-7']?.question ?? '',
      answer: t.faq.items['sec-7']?.answer ?? '',
      category: 'security',
    },
  ];

  const CATEGORIES: { id: FAQCategory; label: string }[] = [
    { id: 'general', label: t.faq.categories['general'] ?? 'General' },
    { id: 'products', label: t.faq.categories['products'] ?? 'Products' },
    { id: 'security', label: t.faq.categories['security'] ?? 'Security & Privacy' },
  ];

  const filteredFAQs = FAQ_DATA.filter((item) => item.category === activeCategory);

  const handleToggle = useCallback((id: string) => {
    setOpenItemId((current) => (current === id ? null : id));
  }, []);

  const handleCategoryChange = useCallback((category: FAQCategory) => {
    setActiveCategory(category);
    setOpenItemId(null);
  }, []);

  return (
    <section className="bg-background relative overflow-hidden py-32">
      <PageGradient />
      <div className="relative z-10 mx-auto max-w-4xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-mono text-3xl font-bold tracking-tight text-white md:text-5xl">
            {t.faq.title}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl font-mono text-sm">
            {t.faq.subtitle}{' '}
            <a
              href={`https://chat.openai.com/?q=${encodeURIComponent('I want to ask about Decoy Phrase...')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline-offset-4 transition-colors hover:underline"
            >
              {t.faq.chatAi}
            </a>
          </p>
        </motion.div>

        {/* Category Tabs - Segmented Control */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 flex justify-center"
        >
          <div className="inline-flex items-center rounded-full border border-white/5 bg-neutral-800/50 p-1">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`relative rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-neutral-600 text-white shadow-sm'
                    : 'text-muted-foreground hover:bg-white/5 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Accordion List */}
        <motion.div
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-white/10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {filteredFAQs.map((item) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openItemId === item.id}
                  onToggle={() => handleToggle(item.id)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
