import { createRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { rootRoute } from './__root';

export const bookRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/book',
  component: lazy(() => import('~/pages/Board/Book/BookPage.tsx')),
});
