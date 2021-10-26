import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Tea from '@/views/tea/index.vue'

export const navRoutes: RouteRecordRaw[] = [
  {
    path: '/tea',
    name: 'Tea',
    component: Tea,
    meta: {
      icon: 'emoji_food_beverage',
      title: '茶'
    }
  }
]

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tea'
  },
  ...navRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
