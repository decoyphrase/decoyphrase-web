/**
 * Feedback & Support Page
 * @route /feedback
 *
 * Features:
 * - Dual-column layout: Feedback (left) & Support (right)
 * - Form draft persistence via localStorage
 * - Zod validation with react-hook-form
 * - Conditional App Version field based on Category
 * - Monochrome/Industrial aesthetic
 */

'use client';

import { useForm } from 'react-hook-form';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SOCIAL_LINKS } from '@/constants/links';
import { useLanguageStore } from '@/lib/store/language';
import { PageGradient } from '@/components/ui';

// =============================================================================
// Zod Schemas Factory
// =============================================================================

import { Translations } from '@/lib/i18n/translations';

function createSchemas(t: Translations) {
  const feedbackSchema = z.object({
    name: z.string().min(1, t.feedback.forms.feedback.required),
    subject: z.string().min(1, t.feedback.forms.feedback.required),
    description: z.string().min(10, t.feedback.forms.feedback.minChar),
    email: z.string().email(t.feedback.forms.feedback.invalidEmail),
  });

  const supportSchema = z.object({
    name: z.string().min(1, t.feedback.forms.support.required),
    category: z.string().min(1, t.feedback.forms.support.required),
    subject: z.string().min(1, t.feedback.forms.support.required),
    appVersion: z.string().optional(),
    description: z.string().min(10, t.feedback.forms.support.minChar),
    referenceLink: z.string().url().optional().or(z.literal('')),
    email: z.string().email(t.feedback.forms.support.invalidEmail),
  });

  return { feedbackSchema, supportSchema };
}

type FeedbackFormData = z.infer<ReturnType<typeof createSchemas>['feedbackSchema']>;
type SupportFormData = z.infer<ReturnType<typeof createSchemas>['supportSchema']>;

// Categories for support form
const SUPPORT_CATEGORIES = [
  { value: 'android', label: 'Android', showVersion: true },
  { value: 'windows', label: 'Windows', showVersion: true },
  { value: 'macos', label: 'macOS', showVersion: true },
  { value: 'linux', label: 'Linux', showVersion: true },
  { value: 'website', label: 'Website', showVersion: false },
  { value: 'permanent-storage', label: 'Permanent Storage', showVersion: false },
];

// =============================================================================
// Custom Hook: useFormPersistence
// =============================================================================

function useFormPersistence<T extends Record<string, unknown>>(
  key: string,
  form: ReturnType<typeof useForm<T>>
) {
  const { watch, reset } = form;

  // Load draft on mount
  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        reset(parsed);
      } catch {
        // Ignore parse errors
      }
    }
  }, [key, reset]);

  // Save draft on change (debounced)
  useEffect(() => {
    const subscription = watch((data) => {
      localStorage.setItem(key, JSON.stringify(data));
    });
    return () => subscription.unsubscribe();
  }, [key, watch]);

  // Clear draft
  const clearDraft = useCallback(() => {
    localStorage.removeItem(key);
  }, [key]);

  return { clearDraft };
}

// =============================================================================
// Discord Banner Component
// =============================================================================

function DiscordBanner() {
  const { t } = useLanguageStore();

  return (
    <a
      href={SOCIAL_LINKS.discord}
      target="_blank"
      rel="noopener noreferrer"
      className="group border-border bg-card hover:border-foreground flex items-center gap-4 rounded-none border p-6 transition-all"
    >
      {/* Discord Icon */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#5865F2] text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
        </svg>
      </div>

      {/* Text */}
      <div>
        <p
          className="text-muted-foreground text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t.feedback.discord.text }}
        ></p>
      </div>
    </a>
  );
}

// =============================================================================
// Input Component (Reusable)
// =============================================================================

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | undefined;
  helperText?: string | undefined;
}

function Input({ label, error, helperText, id, ...props }: InputProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-xs font-bold tracking-widest uppercase">
        {label}
      </label>
      <input
        id={id}
        className="border-border bg-muted placeholder:text-muted-foreground focus:border-foreground h-12 w-full rounded-none border px-4 text-sm focus:outline-none"
        {...props}
      />
      {helperText && <p className="text-muted-foreground text-xs italic">{helperText}</p>}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

// =============================================================================
// Textarea Component (Reusable)
// =============================================================================

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string | undefined;
}

function Textarea({ label, error, id, ...props }: TextareaProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-xs font-bold tracking-widest uppercase">
        {label}
      </label>
      <textarea
        id={id}
        className="border-border bg-muted placeholder:text-muted-foreground focus:border-foreground min-h-[120px] w-full resize-none rounded-none border px-4 py-3 text-sm focus:outline-none"
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

// =============================================================================
// Select Component (Reusable)
// =============================================================================

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string | undefined;
  options: { value: string; label: string }[];
}

function Select({ label, error, id, options, ...props }: SelectProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-xs font-bold tracking-widest uppercase">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          className="border-border bg-muted focus:border-foreground h-12 w-full appearance-none rounded-none border px-4 pr-10 text-sm focus:outline-none"
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="text-muted-foreground pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

// =============================================================================
// Feedback Form Component
// =============================================================================

function FeedbackForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { t } = useLanguageStore();

  const { feedbackSchema } = useMemo(() => createSchemas(t), [t]);

  const form = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: '',
      subject: '',
      description: '',
      email: '',
    },
  });

  const { clearDraft } = useFormPersistence('feedback-draft', form);

  const onSubmit = async (data: FeedbackFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'feedback',
          data,
        }),
      });

      if (!response.ok) {
        throw new Error('API submission failed');
      }

      setSubmitStatus('success');
      form.reset();
      clearDraft();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="border-border bg-card rounded-none border p-6 sm:p-8">
      <h2 className="mb-6 text-xl font-bold tracking-tight uppercase">
        {t.feedback.forms.feedback.title}
      </h2>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label={t.feedback.forms.feedback.name}
          id="feedback-name"
          placeholder={t.feedback.forms.feedback.name}
          {...form.register('name')}
          error={form.formState.errors.name?.message}
        />

        <Input
          label={t.feedback.forms.feedback.subject}
          id="feedback-subject"
          placeholder={t.feedback.forms.feedback.subject}
          {...form.register('subject')}
          error={form.formState.errors.subject?.message}
        />

        <Textarea
          label={t.feedback.forms.feedback.description}
          id="feedback-description"
          placeholder={t.feedback.forms.feedback.description}
          {...form.register('description')}
          error={form.formState.errors.description?.message}
        />

        <Input
          label={t.feedback.forms.feedback.email}
          id="feedback-email"
          type="email"
          placeholder="your@email.com"
          {...form.register('email')}
          error={form.formState.errors.email?.message}
        />

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="border-border bg-muted hover:bg-foreground hover:text-background rounded-none border px-6 py-3 text-sm font-bold tracking-widest uppercase transition-all disabled:opacity-50"
          >
            {isSubmitting ? t.feedback.forms.feedback.submitting : t.feedback.forms.feedback.submit}
          </button>
        </div>

        {submitStatus === 'success' && (
          <p className="text-center text-sm text-green-500">{t.feedback.forms.feedback.success}</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-center text-sm text-red-500">{t.feedback.forms.feedback.error}</p>
        )}
      </form>
    </div>
  );
}

// =============================================================================
// Support Form Component
// =============================================================================

function SupportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { t } = useLanguageStore();

  const { supportSchema } = useMemo(() => createSchemas(t), [t]);

  const form = useForm<SupportFormData>({
    resolver: zodResolver(supportSchema),
    defaultValues: {
      name: '',
      category: 'android',
      subject: '',
      appVersion: '',
      description: '',
      referenceLink: '',
      email: '',
    },
  });

  const { clearDraft } = useFormPersistence('support-draft', form);

  const selectedCategory = form.watch('category');
  const showVersionField =
    SUPPORT_CATEGORIES.find((c) => c.value === selectedCategory)?.showVersion ?? false;

  const onSubmit = async (data: SupportFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'support',
          data,
        }),
      });

      if (!response.ok) {
        throw new Error('API submission failed');
      }

      setSubmitStatus('success');
      form.reset();
      clearDraft();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="border-border bg-card rounded-none border p-6 sm:p-8">
      <h2 className="mb-6 text-xl font-bold tracking-tight uppercase">
        {t.feedback.forms.support.title}
      </h2>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label={t.feedback.forms.feedback.name}
          id="support-name"
          placeholder={t.feedback.forms.feedback.name}
          {...form.register('name')}
          error={form.formState.errors.name?.message}
        />

        <Select
          label={t.feedback.forms.support.category}
          id="support-category"
          options={SUPPORT_CATEGORIES}
          {...form.register('category')}
          error={form.formState.errors.category?.message}
        />

        <Input
          label={t.feedback.forms.feedback.subject}
          id="support-subject"
          placeholder={t.feedback.forms.feedback.subject}
          {...form.register('subject')}
          error={form.formState.errors.subject?.message}
        />

        {showVersionField && (
          <Input
            label={t.feedback.forms.support.appVersion}
            id="support-app-version"
            placeholder="e.g., 1.0.0"
            {...form.register('appVersion')}
            error={form.formState.errors.appVersion?.message}
          />
        )}

        <Textarea
          label={t.feedback.forms.feedback.description}
          id="support-description"
          placeholder={t.feedback.forms.feedback.description}
          {...form.register('description')}
          error={form.formState.errors.description?.message}
        />

        <Input
          label={t.feedback.forms.support.reference}
          id="support-reference-link"
          placeholder="Google Drive, Cloud, or Public URL"
          helperText={t.feedback.forms.support.referenceHelper}
          {...form.register('referenceLink')}
          error={form.formState.errors.referenceLink?.message}
        />

        <Input
          label={t.feedback.forms.feedback.email}
          id="support-email"
          type="email"
          placeholder="your@email.com"
          {...form.register('email')}
          error={form.formState.errors.email?.message}
        />

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-foreground text-background hover:bg-foreground/80 rounded-none px-6 py-3 text-sm font-bold tracking-widest uppercase transition-all disabled:opacity-50"
          >
            {isSubmitting ? t.feedback.forms.feedback.submitting : t.feedback.forms.feedback.submit}
          </button>
        </div>

        {submitStatus === 'success' && (
          <p className="text-center text-sm text-green-500">{t.feedback.forms.feedback.success}</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-center text-sm text-red-500">{t.feedback.forms.feedback.error}</p>
        )}
      </form>
    </div>
  );
}

// =============================================================================
// Main Page Component
// =============================================================================

export default function FeedbackPage() {
  const { t } = useLanguageStore();

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-12 sm:px-6 lg:px-10">
      <PageGradient />
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <section className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Title & Description */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight uppercase md:text-5xl">
              {t.feedback.title}
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl">{t.feedback.description}</p>
          </div>

          {/* Discord Banner */}
          <DiscordBanner />
        </section>

        {/* Forms Section (Dual Column) */}
        <section className="grid gap-8 lg:grid-cols-2">
          <FeedbackForm />
          <SupportForm />
        </section>
      </div>
    </main>
  );
}
