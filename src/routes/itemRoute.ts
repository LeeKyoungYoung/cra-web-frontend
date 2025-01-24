import { createRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { rootRoute } from './__root';

export const itemRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/item',
  component: lazy(() => import('~/pages/Board/Item/ItemPage.tsx')),
});
