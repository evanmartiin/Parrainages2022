<template>
  <div class="general-stats">
    <Header :needsBack="true"/>
    <Hero/>
    <Map/>
    <Departments/>
    <Stats/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Hero from '../components/stats/Hero.vue'
import Map from '../components/stats/Map.vue'
import Departments from '../components/candidate/Departments.vue'
import Stats from '../components/candidate/Stats.vue'

export default {
  name: 'CandidatePage',
  components: {
    Header,
    Hero,
    Map,
    Departments,
    Stats
  }
}
</script>

<style scoped>
</style>
