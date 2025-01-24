import { createRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { rootRoute } from './__root';

export const idSerachRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/idsearch',
  component: lazy(() => import('~/pages/Login/ID/IDSearchPage.tsx')),
});

export const idCompleteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/idsearch/complete',
  component: lazy(() => import('~/pages/Login/ID/IDSearchCompletePage.tsx')),
});

export const pwSearchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/pwsearch',
  component: lazy(() => import('~/pages/Login/PW/PWSearchPage.tsx')),
});

export const pwResetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/pwsearch/reset',
  component: lazy(() => import('~/pages/Login/PW/PWResetPage.tsx')),
});

export const pwCompleteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/pwsearch/complete',
  component: lazy(() => import('~/pages/Login/PW/PWResetCompletePage.tsx')),
});
