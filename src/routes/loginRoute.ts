import { createRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { rootRoute } from './__root';

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: lazy(() => import('~/pages/Login/LoginPage.tsx')),
});
