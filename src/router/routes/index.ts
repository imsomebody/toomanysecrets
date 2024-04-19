import { RouteRecordRaw } from 'vue-router';

// routes
import { routes as main } from './main';

export const everyRoute: RouteRecordRaw[] = [
  ...main,

  { path: '', redirect: { name: 'main' } },
];
