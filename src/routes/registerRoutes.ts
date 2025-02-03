import { createRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { rootRoute } from './__root';

export const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: lazy(() => import('~/pages/Register/RegisterPage.tsx')),
});

export const registerWelcomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register/welcome',
  component: lazy(() => import('~/pages/Register/RegisterCompletePage.tsx')),
});
