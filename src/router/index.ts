import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ArticlePage from '../views/ArticlePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ArticlePage
    }
  ]
});

export default router
