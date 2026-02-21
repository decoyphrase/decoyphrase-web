/**
 * API Client
 * Type-safe fetch wrapper with error handling
 */

import type { ApiError, ApiResponse } from '@/types';

/**
 * Custom API error class
 */
export class ApiClientError extends Error {
  code: string;
  status: number;
  details: Record<string, unknown> | undefined;

  constructor(message: string, code: string, status: number, details?: Record<string, unknown>) {
    super(message);
    this.name = 'ApiClientError';
    this.code = code;
    this.status = status;
    this.details = details;
  }
}

/**
 * Request configuration options
 */
interface RequestOptions extends Omit<RequestInit, 'body'> {
  body?: unknown;
  timeout?: number;
}

/**
 * Default request timeout (10 seconds)
 */
const DEFAULT_TIMEOUT = 10000;

/**
 * Create an AbortController with timeout
 */
function createTimeoutController(timeout: number): {
  controller: AbortController;
  timeoutId: ReturnType<typeof setTimeout>;
} {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  return { controller, timeoutId };
}

/**
 * Type-safe fetch wrapper
 */
export async function apiClient<T>(
  url: string,
  options: RequestOptions = {}
): Promise<ApiResponse<T>> {
  const { body, timeout = DEFAULT_TIMEOUT, ...fetchOptions } = options;

  const { controller, timeoutId } = createTimeoutController(timeout);

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      headers: {
        'Content-Type': 'application/json',
        ...fetchOptions.headers,
      },
      body: body ? JSON.stringify(body) : null,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    // Handle non-OK responses
    if (!response.ok) {
      const errorData = (await response.json().catch(() => ({}))) as { error?: ApiError };

      throw new ApiClientError(
        errorData.error?.message ?? `HTTP ${response.status}: ${response.statusText}`,
        errorData.error?.code ?? 'HTTP_ERROR',
        response.status,
        errorData.error?.details
      );
    }

    // Parse successful response
    const data = (await response.json()) as ApiResponse<T>;
    return data;
  } catch (error) {
    clearTimeout(timeoutId);

    // Handle abort (timeout)
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new ApiClientError('Request timeout', 'TIMEOUT', 408);
    }

    // Re-throw ApiClientError
    if (error instanceof ApiClientError) {
      throw error;
    }

    // Handle network errors
    throw new ApiClientError(
      error instanceof Error ? error.message : 'Network error',
      'NETWORK_ERROR',
      0
    );
  }
}

/**
 * Convenience methods
 */
export const api = {
  get: <T>(url: string, options?: RequestOptions) =>
    apiClient<T>(url, { ...options, method: 'GET' }),

  post: <T>(url: string, body: unknown, options?: RequestOptions) =>
    apiClient<T>(url, { ...options, method: 'POST', body }),

  put: <T>(url: string, body: unknown, options?: RequestOptions) =>
    apiClient<T>(url, { ...options, method: 'PUT', body }),

  delete: <T>(url: string, options?: RequestOptions) =>
    apiClient<T>(url, { ...options, method: 'DELETE' }),
} as const;
