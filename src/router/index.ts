import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import('../views/home/index.vue')
const Login = () => import('../views/login/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
