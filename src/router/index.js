import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hello from '../views/Hello.vue'
import About from '../views/About.vue'
import LabelModal from '../components/LabelModal'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addlabel',
    name: 'Add note label',
    component: LabelModal
  },
  {
    path: '/hello',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
