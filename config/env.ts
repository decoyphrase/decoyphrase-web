/**
 * Environment Configuration
 * Validates and exports environment variables using Zod
 */

import { z } from 'zod';

/**
 * Server-side environment schema
 * These variables are only available on the server
 */
const serverEnvSchema = z.object({
  // Redis/Upstash
  UPSTASH_REDIS_REST_URL: z.string().url().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().min(1).optional(),

  // External APIs
  COINGECKO_API_KEY: z.string().optional(),

  // Integrations
  DISCORD_WEBHOOK_URL: z.string().url().optional(),
  GOOGLE_SHEETS_API_KEY: z.string().optional(),
  GOOGLE_SHEETS_SPREADSHEET_ID: z.string().optional(),

  // Security
  TURNSTILE_SECRET_KEY: z.string().optional(),
  RATE_LIMIT_REQUESTS_PER_MINUTE: z.coerce.number().default(60),
});

/**
 * Client-side environment schema
 * These variables are exposed to the browser (NEXT_PUBLIC_ prefix)
 */
const clientEnvSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
  NEXT_PUBLIC_APP_NAME: z.string().default('Decoy Phrase'),
  NEXT_PUBLIC_ARWEAVE_GATEWAY: z.string().url().default('https://arweave.net'),

  // Public wallet addresses
  NEXT_PUBLIC_STORAGE_WALLET_ADDRESS: z.string().optional(),
  NEXT_PUBLIC_TEAM_WALLET_ETH: z.string().optional(),
  NEXT_PUBLIC_TEAM_WALLET_SOL: z.string().optional(),
  NEXT_PUBLIC_TEAM_WALLET_BTC: z.string().optional(),
  NEXT_PUBLIC_TEAM_WALLET_BASE: z.string().optional(),
  NEXT_PUBLIC_TEAM_WALLET_SUI: z.string().optional(),
  NEXT_PUBLIC_TEAM_WALLET_POLYGON: z.string().optional(),

  // Security (public key only)
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().optional(),
});

/**
 * Combined environment type
 */
export type ServerEnv = z.infer<typeof serverEnvSchema>;
export type ClientEnv = z.infer<typeof clientEnvSchema>;

/**
 * Validate and parse server environment
 * Call this on server-side only
 */
export function getServerEnv(): ServerEnv {
  const result = serverEnvSchema.safeParse(process.env);

  if (!result.success) {
    console.error('❌ Invalid server environment variables:');
    console.error(result.error.flatten().fieldErrors);
    throw new Error('Invalid server environment configuration');
  }

  return result.data;
}

/**
 * Validate and parse client environment
 * Safe to call on both client and server
 */
export function getClientEnv(): ClientEnv {
  const result = clientEnvSchema.safeParse({
    NEXT_PUBLIC_APP_URL: process.env['NEXT_PUBLIC_APP_URL'],
    NEXT_PUBLIC_APP_NAME: process.env['NEXT_PUBLIC_APP_NAME'],
    NEXT_PUBLIC_ARWEAVE_GATEWAY: process.env['NEXT_PUBLIC_ARWEAVE_GATEWAY'],
    NEXT_PUBLIC_STORAGE_WALLET_ADDRESS: process.env['NEXT_PUBLIC_STORAGE_WALLET_ADDRESS'],
    NEXT_PUBLIC_TEAM_WALLET_ETH: process.env['NEXT_PUBLIC_TEAM_WALLET_ETH'],
    NEXT_PUBLIC_TEAM_WALLET_SOL: process.env['NEXT_PUBLIC_TEAM_WALLET_SOL'],
    NEXT_PUBLIC_TEAM_WALLET_BTC: process.env['NEXT_PUBLIC_TEAM_WALLET_BTC'],
    NEXT_PUBLIC_TEAM_WALLET_BASE: process.env['NEXT_PUBLIC_TEAM_WALLET_BASE'],
    NEXT_PUBLIC_TEAM_WALLET_SUI: process.env['NEXT_PUBLIC_TEAM_WALLET_SUI'],
    NEXT_PUBLIC_TEAM_WALLET_POLYGON: process.env['NEXT_PUBLIC_TEAM_WALLET_POLYGON'],
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env['NEXT_PUBLIC_TURNSTILE_SITE_KEY'],
  });

  if (!result.success) {
    console.error('❌ Invalid client environment variables:');
    console.error(result.error.flatten().fieldErrors);
    throw new Error('Invalid client environment configuration');
  }

  return result.data;
}

/**
 * Pre-validated client env for use in components
 * Lazily initialized on first access
 */
let _clientEnv: ClientEnv | null = null;

export function clientEnv(): ClientEnv {
  if (!_clientEnv) {
    _clientEnv = getClientEnv();
  }
  return _clientEnv;
}
