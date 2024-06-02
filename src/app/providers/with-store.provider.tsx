import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/app/store/store.ts'

export const withStore = (component: () => React.ReactNode) => () => {
  return <Provider store={store} children={component()} />;
};