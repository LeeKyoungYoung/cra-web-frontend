import { createRouter } from '@tanstack/react-router';
import { rootRoute } from './__root.tsx';
import { notFoundRoute } from './notFoundRoute.ts';
import { introRoute } from './introRoute.ts';
import { recruitRoute } from './recruitRoute.ts';
import { mainRoute } from './mainRoute.ts';
import { loginRoute } from './loginRoute.ts';
import { registerRoute, registerWelcomeRoute } from './registerRoutes.ts';
import {
  idSerachRoute,
  idCompleteRoute,
  pwSearchRoute,
  pwResetRoute,
  pwCompleteRoute,
} from './authRoutes.ts';
import {
  noticeRoute,
  noticeViewRoute,
  noticeEditRoute,
  noticeWriteRoute,
} from './noticeRoutes.ts';
import {
  academicRoute,
  academicViewRoute,
  academicEditRoute,
  academicWriteRoute,
} from './academicRoutes.ts';
import { bookRoute } from './bookRoute.ts';
import { itemRoute } from './itemRoute.ts';
import { projectRoute } from './projectRoute.ts';
import {
  havrutaRoute,
  havrutaViewRoute,
  havrutaEditRoute,
  havrutaWriteRoute,
} from './havrutaRoutes.ts';
import { adminRoute } from './adminRoute.ts';
import {
  adminBookRoute,
  adminBookDetailRoute,
  adminBookUpdateRoute,
  adminBookCreateRoute,
} from './adminBookRoutes.ts';
import {
  adminItemRoute,
  adminItemDetailRoute,
  adminItemUpdateRoute,
  adminItemCreateRoute,
} from './adminItemRoutes.ts';
import {
  adminHavrutaRoute,
  adminHavrutaUpdateRoute,
  adminHavrutaCreateRoute,
} from './adminHavrutaRoutes.ts';
import {
  adminProjectRoute,
  adminProjectUpdateRoute,
  adminProjectCreateRoute,
} from './adminProjectRoutes.ts';
export const routes = createRouter({
  routeTree: rootRoute.addChildren([
    notFoundRoute,
    introRoute,
    recruitRoute,
    mainRoute,
    loginRoute,
    registerRoute,
    registerWelcomeRoute,
    idSerachRoute,
    idCompleteRoute,
    pwSearchRoute,
    pwResetRoute,
    pwCompleteRoute,
    noticeRoute,
    noticeViewRoute,
    noticeEditRoute,
    noticeWriteRoute,
    academicRoute,
    academicViewRoute,
    academicEditRoute,
    academicWriteRoute,
    bookRoute,
    itemRoute,
    projectRoute,
    havrutaRoute,
    havrutaViewRoute,
    havrutaEditRoute,
    havrutaWriteRoute,
    adminRoute,
    adminBookRoute,
    adminBookDetailRoute,
    adminBookUpdateRoute,
    adminBookCreateRoute,
    adminItemRoute,
    adminItemDetailRoute,
    adminItemUpdateRoute,
    adminItemCreateRoute,
    adminHavrutaRoute,
    adminHavrutaUpdateRoute,
    adminHavrutaCreateRoute,
    adminProjectRoute,
    adminProjectUpdateRoute,
    adminProjectCreateRoute,
  ]),
});
