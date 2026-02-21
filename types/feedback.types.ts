/**
 * Feedback Types
 * Type definitions for feedback and support forms
 */

/**
 * Feedback category options
 */
export type FeedbackCategory =
  | 'website'
  | 'permanent-storage'
  | 'generator-windows'
  | 'generator-macos'
  | 'generator-linux'
  | 'generator-android';

/**
 * Base feedback form data
 */
export interface BaseFeedbackData {
  name: string;
  category: FeedbackCategory;
  subject: string;
  description: string;
  refLink?: string;
  email?: string;
}

/**
 * Generator-specific feedback (includes version)
 */
export interface GeneratorFeedbackData extends BaseFeedbackData {
  category: 'generator-windows' | 'generator-macos' | 'generator-linux' | 'generator-android';
  version: string;
}

/**
 * Website/Storage feedback
 */
export interface WebsiteFeedbackData extends BaseFeedbackData {
  category: 'website' | 'permanent-storage';
}

/**
 * Union type for all feedback forms
 */
export type FeedbackFormData = GeneratorFeedbackData | WebsiteFeedbackData;

/**
 * Type guard for generator feedback
 */
export function isGeneratorFeedback(data: FeedbackFormData): data is GeneratorFeedbackData {
  return data.category.startsWith('generator-');
}

/**
 * Feedback submission response
 */
export interface FeedbackSubmissionResponse {
  success: boolean;
  message: string;
  ticketId?: string;
}

/**
 * Feedback form validation errors
 */
export interface FeedbackValidationErrors {
  name?: string;
  category?: string;
  subject?: string;
  description?: string;
  version?: string;
  refLink?: string;
  email?: string;
}
