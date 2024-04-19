import { route } from 'quasar/wrappers';
import { NavigationGuard, createRouter, createWebHistory } from 'vue-router';

import routes from './routes';
import { titleGuard } from './guards/titleGuard';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

const guards: NavigationGuard[] = [titleGuard];

export default route(function (/* { store, ssrContext } */) {
  const createHistory = createWebHistory;

  const router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  for (const guard of guards) {
    router.beforeEach(guard);
  }

  return router;
});
