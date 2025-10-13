import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Trajectory from '../views/Trajectory.vue'
import WhoAreWe from '../views/WhoAreWe.vue'
import Donate from '../views/Donate.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    },
    {
      path: '/trajectory',
      name: 'trajectory',
      component: Trajectory,
    },
    {
      path: '/who_are_we',
      name: 'whoAreWe',
      component: WhoAreWe,
    },
    {
      path: '/donate',
      name: 'donate',
      component: Donate,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    }
  ],
})


export default router
