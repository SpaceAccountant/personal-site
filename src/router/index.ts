import { createRouter, createWebHistory } from 'vue-router'
import ContactView from '../views/ContactView.vue'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    }
  ]
})

export default router
