import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/layouts/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/overview',
    name: 'overview',
    component: () => import('@/views/overview/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/components/404.vue')
  }
]

// const routes = [
//   {
//     path: '/',
//     redirect: '/list'
//   },
//   {
//     path: '/list',
//     component: () => import('@/components/layouts/index2.vue'),
//     children: [
//       {
//         path: '',
//         name: 'index',
//         component: () => import('@/views/list/index.vue')
//       },
//       {
//         path: 'detail',
//         name: 'detail',
//         component: () => import('@/views/list/detail.vue')
//       },
//       {
//         path: 'about',
//         name: 'about',
//         component: () => import('@/views/list/about.vue')
//       }
//     ]
//   }
// ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
