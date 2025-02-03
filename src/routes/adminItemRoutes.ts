import { createRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { rootRoute } from './__root';

export const adminItemRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/item',
  component: lazy(() => import('~/pages/Board/Item/ItemAdminPage.tsx')),
});

export const adminItemDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/item/view/$id',
  component: lazy(() => import('~/pages/Board/Item/ItemAdminDetailPage.tsx')),
});

export const adminItemUpdateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/item/edit/$id',
  component: lazy(() => import('~/pages/Board/Item/ItemAdminEditPage.tsx')),
});

export const adminItemCreateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/item/write',
  component: lazy(() => import('~/pages/Board/Item/ItemAdminWritePage.tsx')),
});
