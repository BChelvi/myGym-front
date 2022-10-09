import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConnexionView from '../views/ConnectionView.vue'
import ExerciceslistView from '../views/ExerciceslistView.vue'
import ExerciceArm from '../views/ExerciceArmView.vue'
import SignInView from '../views/SignInView.vue'

import AllExercicesArmView from '../views/AllExercicesArmView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/connection/',
    name: 'connection',
    component : ConnexionView
    
  },
  {
    path: '/signin/',
    name: 'signin',
    component : SignInView
    
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
    
  },  {
    path: '/exercice/:exercices_biceps_id',
    name: 'ExerciceArm',
    component: ExerciceArm,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
