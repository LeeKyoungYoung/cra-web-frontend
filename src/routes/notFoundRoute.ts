import { createRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { rootRoute } from './__root';

export const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: lazy(() => import('~/pages/Error/NotFoundPage.tsx')),
});
