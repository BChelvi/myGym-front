import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExerciceslistView from '../views/ExerciceslistView.vue'

import AllExercicesArmView from '../views/AllExercicesArmView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/exerciceslist/',
    name: 'exerciceslist',
    component : ExerciceslistView
    
  },
  {
    path: '/allexercicesarmview',
    name: 'allexercicesarmview',
    component : AllExercicesArmView,
    props :true
    
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
