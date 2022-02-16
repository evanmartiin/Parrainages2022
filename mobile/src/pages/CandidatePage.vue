<template>
  <div class="candidate-page">
    <Header :needsBack="true"/>
    <Hero/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Hero from '../components/candidate/Hero.vue'

export default {
  name: 'CandidatePage',
  components: {
    Header,
    Hero
  }
}
</script>

<style scoped>
</style>
