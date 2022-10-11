import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConnexionView from '../views/ConnectionView.vue'
import MyTrainingView from '../views/MyTrainingView.vue'
import MyExerciceView from '../views/MyExerciceView.vue'
import SignInView from '../views/SignInView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/connection',
    name: 'connection',
    component : ConnexionView
    
  },
  {
    path: '/signin',
    name: 'signin',
    component : SignInView
    
  },
  {
    path: '/mytrainingview',
    name: 'mytrainingview',
    component : MyTrainingView,
    props:true
    
  },
 
   {
    path: '/exercice/:exercice_id',
    name: 'exercice',
    component: MyExerciceView,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
