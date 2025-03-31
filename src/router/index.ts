import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home-view.vue'),
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: () => import('@/views/notifications-view.vue'),
    },
  ],
})

export default router
