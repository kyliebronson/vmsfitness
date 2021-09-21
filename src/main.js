import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Bookonline from '@/components/Bookonline'
import Contact from '@/components/Contact'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Optionally install the BootstrapVue icon components plugin

Vue.config.productionTip = false
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About},
  { path: '/contact', component: Contact },
  { path: '/bookonline', component: Bookonline },
]
const router = new VueRouter({
  routes // short for `routes: routes`
})
new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
