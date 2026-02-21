/**
 * Validators
 * Zod schemas and validation utilities
 */

import { z } from 'zod';

/**
 * Email validation schema
 */
export const emailSchema = z.string().email('Invalid email address').optional().or(z.literal(''));

/**
 * URL validation schema
 */
export const urlSchema = z.string().url('Invalid URL').optional().or(z.literal(''));

/**
 * Feedback form validation schema
 */
export const feedbackFormSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters').max(100),
    category: z.enum([
      'website',
      'permanent-storage',
      'generator-windows',
      'generator-macos',
      'generator-linux',
      'generator-android',
    ]),
    subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
    description: z.string().min(20, 'Description must be at least 20 characters').max(5000),
    version: z.string().optional(),
    refLink: urlSchema,
    email: emailSchema,
  })
  .refine(
    (data) => {
      // Version is required for generator categories
      if (data.category.startsWith('generator-')) {
        return !!data.version && data.version.length > 0;
      }
      return true;
    },
    {
      message: 'Version is required for generator feedback',
      path: ['version'],
    }
  );

/**
 * Donation calculator input schema
 */
export const donationInputSchema = z.object({
  amount: z.number().positive('Amount must be positive').max(1000000, 'Amount too large'),
  currency: z.enum(['USD']).default('USD'),
});

/**
 * Wallet address validation (basic format check)
 */
export const walletAddressSchema = z.object({
  arweave: z.string().length(43, 'Arweave address must be 43 characters'),
  ethereum: z.string().regex(/^0x[a-fA-F0-9]{40}$/, 'Invalid Ethereum address'),
  solana: z.string().min(32).max(44),
  bitcoin: z.string().min(26).max(62),
});

/**
 * Type inference from schemas
 */
export type FeedbackFormInput = z.infer<typeof feedbackFormSchema>;
export type DonationInput = z.infer<typeof donationInputSchema>;

/**
 * Validate and parse with error extraction
 */
export function validateForm<T extends z.ZodType>(
  schema: T,
  data: unknown
): { success: true; data: z.infer<T> } | { success: false; errors: Record<string, string> } {
  const result = schema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data as z.infer<T> };
  }

  const errors: Record<string, string> = {};
  result.error.errors.forEach((err) => {
    const path = err.path.join('.');
    if (path) {
      errors[path] = err.message;
    }
  });

  return { success: false, errors };
}
