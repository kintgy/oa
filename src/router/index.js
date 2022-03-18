import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import('@/views/Index'),
    meta: {}
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Index'),
    meta: {}
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes, base: '/'
})

export default router
