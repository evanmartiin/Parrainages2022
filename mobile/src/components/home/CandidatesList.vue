<template>
  <div class="candidates-list">
    <h1>Chiffres par candidat</h1>
    <div v-if="!loading && candidates && candidates.length">
      <Candidate v-for="candidate in candidates" :key="candidate" :rank="candidate.rang" :name="candidate.nom" :votes="candidate.votes_totaux"/>
    </div>
    <div class="loading" v-if="loading">
      <p>Chargement des données...</p>
    </div>
    <div class="error" v-if="error">
      <p>Une erreur est survenue.</p>
    </div>
  </div>
</template>

<script>
import Candidate from '@/components/home/Candidate.vue'

export default {
  components: { Candidate },
  name: 'CandidatesList',
  props: {
    candidates: Object,
    loading: Boolean,
    error: Boolean
  }
}
</script>

<style scoped lang="scss">
h1 {
  margin-bottom: 20px;
}

.candidates-list {
  background-color: #ffffff;
  width: 100%;
  padding: 20px 20px 0 20px;
  color: #000000;
  box-sizing: border-box;
}

.candidate {
  margin-bottom: 15px;

  &:last-of-type {
    margin-bottom: 0;
  }
}

.loading p, .error p {
  text-align: center;
  font-style: italic;
}
</style>
