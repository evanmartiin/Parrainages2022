<template>
  <div class="candidates-list">
    <h1>Chiffres par candidat</h1>
    <div v-if="!loading && candidates && candidates.length">
      <Candidate v-for="candidate in candidates" :key="candidate" :rank="candidate.rang" :name="candidate.nom" :votes="candidate.votes_totaux" :podium="candidate.rang <= 3"/>
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
import { ref, onMounted } from 'vue'

export default {
  components: { Candidate },
  name: 'CandidatesList',
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

<style scoped lang="scss">
h1 {
  margin-bottom: 35px;
}

.candidates-list {
  background-color: #ffffff;
  box-sizing: border-box;
  border: 5px solid #E1000F;
  width: 100%;
  padding: 35px;
  color: #000000;
}

.candidate.podium {
  margin-bottom: 35px;
}

.candidate.no-podium {
  padding-top: 25px;
  margin-top: 25px;
  position: relative;
}

.candidate.no-podium:after {
  content: "";
  position: absolute;
  top: 0;
  left: 30%;
  right: 30%;
  height: 1px;
  border-top: 1px solid #E1000F;
}

.loading p, .error p {
  text-align: center;
  font-style: italic;
}
</style>
