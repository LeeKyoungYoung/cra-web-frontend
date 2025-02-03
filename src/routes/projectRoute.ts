import { createRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { rootRoute } from './__root';

export const projectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/project',
  component: lazy(() => import('~/pages/Board/Project/ProjectPage.tsx')),
});
