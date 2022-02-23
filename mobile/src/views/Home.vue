<template>
  <div class="home">
    <Header/>
    <Hero v-if="!loading" :candidates="candidates"/>
    <CandidatesList :candidates="candidates" :loading="loading" :error="error"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Hero from '@/components/home/Hero.vue'
import CandidatesList from '@/components/home/CandidatesList.vue'
import { ref, onMounted } from 'vue'

export default {
  name: 'Home',
  components: {
    Header,
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
          console.log(json);
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
