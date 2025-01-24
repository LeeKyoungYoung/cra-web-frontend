import { createRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { rootRoute } from './__root';

export const havrutaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/havruta',
  component: lazy(
    () => import('~/pages/Board/Havruta/HavrutaBoard/HavrutaBoardPage.tsx'),
  ),
});

export const havrutaViewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/havruta/view/:id',
  component: lazy(
    () =>
      import('~/pages/Board/Havruta/HavrutaBoard/HavrutaBoardDetailPage.tsx'),
  ),
});

export const havrutaEditRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/havruta/edit/:id',
  component: lazy(
    () => import('~/pages/Board/Havruta/HavrutaBoard/HavrutaBoardEditPage.tsx'),
  ),
});

export const havrutaWriteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/havruta/write',
  component: lazy(
    () =>
      import('~/pages/Board/Havruta/HavrutaBoard/HavrutaBoardWritePage.tsx'),
  ),
});
