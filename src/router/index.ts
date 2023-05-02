import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BlogPost from '../views/BlogPost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blogpost/:id',
      name: 'article',
      component: BlogPost
    }
  ]
})

export default router
