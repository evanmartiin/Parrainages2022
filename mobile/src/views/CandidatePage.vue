<template>
  <div class="candidate-page">
    <Header :needsBack="true"/>
    <Hero/>
    <Map/>
    <Departments/>
    <Stats/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Hero from '@/components/candidate/Hero.vue'
import Map from '@/components/candidate/Map.vue'
import Departments from '@/components/candidate/Departments.vue'
import Stats from '@/components/candidate/Stats.vue'

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