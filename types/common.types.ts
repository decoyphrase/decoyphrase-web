/**
 * Common Types
 * Shared type definitions used across the application
 */

/**
 * Standard API response wrapper
 */
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: ApiError;
  timestamp: number;
}

/**
 * Standard API error structure
 */
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
  page: number;
  limit: number;
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

/**
 * Loading states for async operations
 */
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

/**
 * Generic nullable type
 */
export type Nullable<T> = T | null;

/**
 * Make specific properties optional
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Make specific properties required
 */
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

/**
 * Extract keys of type
 */
export type KeysOfType<T, TProp> = {
  [K in keyof T]: T[K] extends TProp ? K : never;
}[keyof T];

/**
 * Supported platforms for downloads
 */
export type Platform = 'windows' | 'macos' | 'linux' | 'android';

/**
 * Supported languages
 */
export type Language = 'en' | 'id';

/**
 * Navigation menu item
 */
export interface NavMenuItem {
  label: string;
  href?: string;
  children?: NavMenuItem[];
  external?: boolean;
  icon?: string;
}
