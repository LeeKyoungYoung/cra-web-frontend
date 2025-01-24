import { createRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { rootRoute } from './__root';

export const adminProjectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/project',
  component: lazy(() => import('~/pages/Board/Project/ProjectAdminPage.tsx')),
});

export const adminProjectDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/project/view/:id',
  component: lazy(
    () => import('~/pages/Board/Project/ProjectAdminDetailPage.tsx'),
  ),
});

export const adminProjectUpdateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/project/edit/:id',
  component: lazy(
    () => import('~/pages/Board/Project/ProjectAdminEditPage.tsx'),
  ),
});

export const adminProjectCreateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/project/write',
  component: lazy(
    () => import('~/pages/Board/Project/ProjectAdminWritePage.tsx'),
  ),
});
