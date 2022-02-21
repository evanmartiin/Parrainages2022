import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import GeneralStats from '@/views/GeneralStats.vue'
// import CandidatePage from '@/views/CandidatePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/candidate/:id',
    name: 'Candidate',
    component: () => import('@/views/CandidatePage.vue'),
    props: true
  },
  {
    path: '/general',
    name: 'General',
    component: GeneralStats
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

export default router
