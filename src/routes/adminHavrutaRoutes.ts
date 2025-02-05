import { createRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { rootRoute } from './__root';

export const adminHavrutaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/havruta',
  component: lazy(
    () => import('~/pages/Board/Havruta/HavrutaAdmin/HavrutaAdminPage.tsx'),
  ),
});

export const adminHavrutaUpdateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/havruta/edit/$id',
  component: lazy(
    () => import('~/pages/Board/Havruta/HavrutaAdmin/HavrutaAdminEditPage.tsx'),
  ),
});

export const adminHavrutaCreateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/havruta/write',
  component: lazy(
    () =>
      import('~/pages/Board/Havruta/HavrutaAdmin/HavrutaAdminWritePage.tsx'),
  ),
});
