import { __APPLICATION_CONFIG__ } from '@types';

export const __APPLICATION__: __APPLICATION_CONFIG__ = {
  baseUrl: import.meta.env.VITE_PUBLIC_URL,
  limit: 10,
  routes: {
    music: '/',
    any: '*',
  }
}