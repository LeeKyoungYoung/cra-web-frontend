import { createRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { rootRoute } from './__root';

export const notRouteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: lazy(() => import('~/pages/Error/NotFoundPage.tsx')),
});

export const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/not-found',
  component: lazy(() => import('~/pages/Error/NotFoundPage.tsx')),
});

export const forbiddenRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/forbidden',
  component: lazy(() => import('~/pages/Error/ForbiddenPage.tsx')),
});

export const serverErrorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/internal-server-error',
  component: lazy(() => import('~/pages/Error/ServerErrorPage.tsx')),
});
