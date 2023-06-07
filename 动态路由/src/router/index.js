import { createRouter, createWebHistory } from 'vue-router'
import DEFAULT_LAYOUT from '@/components/layout.vue'

// 默认路由，所有用户都可以访问
const DEFAULT_ROUTE = [
  {
    path: '/',
    name: 'home',
    component: DEFAULT_LAYOUT,
    meta: {menuName: '首页'},
    children: [
      {
        path: '',
        component: () => import('@/views/home.vue'),
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/components/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: DEFAULT_ROUTE
})

export default router
