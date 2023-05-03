import { createRouter, createWebHistory } from 'vue-router'
import Services from '../app/components/Services.vue'

const routes = [{
    path: '/services',
    name: 'Services',
    component: Services
   }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
