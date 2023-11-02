import { createRouter, createWebHistory } from 'vue-router'


import HomePage from '@/components/HomePage.vue'

const routes = [
  {path: '/', component: HomePage},
]


const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from, next) =>{
  window.scrollTo(0,0)
  next()
})

export default router
