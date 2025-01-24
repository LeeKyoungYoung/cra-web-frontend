import { createRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { rootRoute } from './__root';

export const academicRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/academic',
  component: lazy(() => import('~/pages/Board/Academic/AcademicPage.tsx')),
});

export const academicViewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/academic/view/$id',
  component: lazy(
    () => import('~/pages/Board/Academic/AcademicDetailPage.tsx'),
  ),
});

export const academicEditRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/academic/edit/$id',
  component: lazy(() => import('~/pages/Board/Academic/AcademicEditPage.tsx')),
});

export const academicWriteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/academic/write',
  component: lazy(() => import('~/pages/Board/Academic/AcademicWritePage.tsx')),
});
