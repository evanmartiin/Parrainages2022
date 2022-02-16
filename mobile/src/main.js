import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import Home from './pages/Home.vue'
import CandidatePage from './pages/CandidatePage.vue'
import GeneralStats from './pages/GeneralStats.vue'
import About from './pages/About.vue'
import routes from './routes'

Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || Home
    }
  },
  render (h) { return h(this.ViewComponent) }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})