<template>
  <div class="general-stats">
    <Header :needsBack="true"/>
    <Hero/>
    <Map/>
    <Departments/>
    <Stats/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Hero from '../components/stats/Hero.vue'
import Map from '../components/stats/Map.vue'
import Departments from '../components/candidate/Departments.vue'
import Stats from '../components/candidate/Stats.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'CandidatePage',
  components: {
    Header,
    Hero,
    Map,
    Departments,
    Stats,
    Footer
  }
}
</script>

<style scoped>
</style>
