
import Home from './pages/Home.vue'
import CandidatePage from './pages/CandidatePage.vue'
import GeneralStats from './pages/GeneralStats.vue'
import About from './pages/About.vue'

export default {
    '/': Home,
    '/about': About,
    '/candidate-page': CandidatePage,
    '/general-stats': GeneralStats
  }