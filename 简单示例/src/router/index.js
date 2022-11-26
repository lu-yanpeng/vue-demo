import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: '/kg',
    component: import('../views/Switch.vue')
  },
  {
    path: '/lbt',
    component: import('../views/Carousel.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
