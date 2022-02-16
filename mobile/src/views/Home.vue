<template>
  <div class="home">
    <Header/>
    <Hero/>
    <CandidatesList/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Hero from '@/components/home/Hero.vue'
import CandidatesList from '@/components/home/CandidatesList.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    CandidatesList
  }
}
</script>
