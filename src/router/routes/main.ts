import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    name: 'main',
    path: 'game',
    component: () => import('src/pages/MainPage.vue'),
  },
];
