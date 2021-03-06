import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Faq from './components/Faq.vue'
import Login from './components/Login.vue'


Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/faq', name: 'faq', component: Faq},
  {path: '/login', name: 'login', component: Login},
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
