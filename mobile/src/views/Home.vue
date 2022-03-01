<template>
  <div class="home">
    <Hero v-if="!loading" :candidates="candidates"/>
    <CandidatesList v-if="!loading" :candidates="candidates" :loading="loading" :error="error"/>
    <div class="loading" v-if="loading">
      <p>Chargement des données...</p>
    </div>
    <div class="error" v-if="error">
      <p>Une erreur est survenue.</p>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/home/Hero.vue'
import CandidatesList from '@/components/home/CandidatesList.vue'
import { ref, onMounted } from 'vue'

export default {
  name: 'Home',
  components: {
    Hero,
    CandidatesList
  },
  setup() {
    const candidates = ref(null);
    const loading = ref(true);
    const error = ref(null);

    async function fetchData() {
      loading.value = true;
      
      fetch('https://raw.githubusercontent.com/evanmartiin/Parrainages2022/main/data/json/by-candidates/all_candidates.json')
        .then(res => {
          if (!res.ok) {
            const error = new Error(res.statusText);
            error.json = res.json();
            throw error;
          }

          return res.json();
        })
        .then(json => {
          candidates.value = json;
        })
        .catch(err => {
          error.value = err;
          if (err.json) {
            return err.json.then(json => {
              error.value.message = json.message;
            });
          }
        })
        .then(() => {
          loading.value = false;
        });
    }

    onMounted(() => {
      fetchData();
    });

    return {
      candidates,
      loading,
      error
    };
  }
}
</script>
