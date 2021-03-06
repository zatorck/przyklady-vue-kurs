import 'babel-polyfill'
import Vue from 'vue'

import AppLayout from './components/AppLayout.vue'

import router from "./router";
import './global-comopnents'
import Fetch from './plugins/fetch'

import state from './state'
import VueState from './plugins/state'

Vue.use(Fetch, {
  baseUrl: 'http://localhost:3000/',
})

Vue.use(VueState, state)

new Vue({
  el: '#app',
  render: h => h(AppLayout),
  router,
  data: state
})
