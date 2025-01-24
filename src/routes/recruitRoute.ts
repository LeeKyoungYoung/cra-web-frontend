import { createRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { rootRoute } from './__root';

export const recruitRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/recruit',
  component: lazy(() => import('~/pages/Recruit/RecruitPage.tsx')),
});
