import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from '../router/config';

export const withRouter = (component: () => React.ReactNode) => () => (
  <BrowserRouter {...RouterConfig}>
    <Suspense fallback="Loading...">{component()}</Suspense>
  </BrowserRouter>
);