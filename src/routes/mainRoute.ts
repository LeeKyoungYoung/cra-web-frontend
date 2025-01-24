import { createRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { rootRoute } from './__root';

export const mainRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/main',
  component: lazy(() => import('~/pages/Main/MainPage.tsx')),
});
