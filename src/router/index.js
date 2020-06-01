import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/Info.vue'
import Contact from '../views/Contact.vue'
import Infographic from '../views/Infographic.vue'
import Covid_info from '../views/Covid_info.vue'
import Guidelines from '../views/Guidelines.vue'
import Symptoms from '../views/Symptoms.vue'
import Misconceptions from '../views/Misconceptions.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info',
    name: 'Info',
    component: Info,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/infographic',
    name: 'Infographic',
    component: Infographic,
  },
  {
    path: '/covid_info',
    name: 'Covid_info',
    component: Covid_info,
  },
  {
    path: '/guidelines',
    name: 'Guidelines',
    component: Guidelines,
  },
  {
    path: '/symptoms',
    name: 'Symptoms',
    component: Symptoms,
  },
  {
    path: '/misconceptions',
    name: 'Misconceptions',
    component: Misconceptions,
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
