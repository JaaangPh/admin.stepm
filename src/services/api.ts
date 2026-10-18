export interface RunnerPrice {
  originalPrice: number;
  discountPercentage: number;
  newPrice: number;
}

export interface RunnerRule {
  earningRate: number;
  kmLimitPerDay: number;
  healthLimit: number;
}

export type RunnerRules = Record<'snk-1' | 'snk-2' | 'snk-3' | 'snk-4', RunnerRule>;

const API_BASE_KEY = 'stepm_admin_api_base';

export function getApiBaseUrl(): string {
  const custom = localStorage.getItem(API_BASE_KEY)?.trim();
  if (custom) return custom.replace(/\/+$/, '');

  const configured = (import.meta.env.VITE_API_BASE_URL || '').trim();
  if (configured) return configured.replace(/\/+$/, '');
  if (import.meta.env.DEV) return '';

  throw new Error('Admin API URL is not configured. Set VITE_API_BASE_URL and rebuild the frontend.');
}
