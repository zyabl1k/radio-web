import { __APPLICATION_CONFIG__ } from '@types';

export const __APPLICATION__: __APPLICATION_CONFIG__ = {
  baseUrl: import.meta.env.VITE_PUBLIC_URL,
  imgHolderUrl: 'https://imgholder.ru/320x185/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson',
  limit: 10,
  routes: {
    music: '/',
    any: '*',
  }
}