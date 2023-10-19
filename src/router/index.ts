
import { 
  createRouter,
  createMemoryHistory,
  RouteRecordRaw
} from 'vue-router'


const routes:Array<RouteRecordRaw> = [
  {
      path:'/',
      name:'Login',
      component:() => import('../views/login/index.vue')

  },
  {
      path:'/home',
      name:'Home',
      component:() => import('../views/home/index.vue')
  },
]
const router = createRouter({
  history: createMemoryHistory(),
  routes
})
export default router