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
      path: '/about',
      name: 'about',
      component: () => import('@/views/about-view.vue'),
    },
  ],
})

export default router
