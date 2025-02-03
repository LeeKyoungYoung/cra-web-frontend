import { createRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { rootRoute } from './__root';

export const noticeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/notice',
  component: lazy(() => import('~/pages/Board/Notice/NoticePage.tsx')),
});

export const noticeViewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/notice/view/$id',
  component: lazy(() => import('~/pages/Board/Notice/NoticeDetailPage.tsx')),
});

export const noticeEditRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/notice/edit/$id',
  component: lazy(() => import('~/pages/Board/Notice/NoticeEditPage.tsx')),
});

export const noticeWriteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/notice/write',
  component: lazy(() => import('~/pages/Board/Notice/NoticeWritePage.tsx')),
});
