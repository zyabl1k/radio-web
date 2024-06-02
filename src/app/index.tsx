import React from 'react';
import '@/app/css/index.css';
import { LoadingApp } from '@/app/modules/loading.app.tsx';
import { Core } from '@/app/core';
import { App } from '@/app/app.tsx'

const core = new Core();

core.setup({
  ApplicationComponent: () => <React.StrictMode children={<App />} />,
  LoadingComponent: () => <React.StrictMode children={<LoadingApp />} />
});
