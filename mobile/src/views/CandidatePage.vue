<template>
  <div class="candidate-page">
    <Header :needsBack="true"/>
    <Hero v-if="!loading" :rank="candidate.rang" :party="party" :name="candidate.nom" :votes="candidate.votes_totaux" :validated="candidate.valide" :nav="nav" />
    <Map v-if="!loading" :deps="candidate.stats.departement.valeurs" />
    <Departments v-if="!loading" :deps="candidate.stats.departement.valeurs" :dates="candidate.stats.date.valeurs" />
    <Stats v-if="!loading" :gender="candidate.stats.genre" :functions="candidate.stats.fonction" />
    <div class="loading" v-if="loading">
      <p>Chargement des données...</p>
    </div>
    <div class="error" v-if="error">
      <p>Une erreur est survenue.</p>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Hero from '@/components/candidate/Hero.vue'
import Map from '@/components/candidate/Map.vue'
import Departments from '@/components/candidate/Departments.vue'
import Stats from '@/components/candidate/Stats.vue'
import { ref, onMounted } from 'vue'
import { parties } from "../utils/parties";

export default {
  name: 'CandidatePage',
  components: {
    Header,
    Hero,
    Map,
    Departments,
    Stats
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  async beforeRouteUpdate(to) {
      this.loading = true;
      this.party = parties.find(el => el.name === to.params.id.replaceAll('_', ' '))
      
      fetch('https://raw.githubusercontent.com/evanmartiin/Parrainages2022/main/data/json/by-candidates/' + to.params.id + '.json')
        .then(res => {
          if (!res.ok) {
            const error = new Error(res.statusText);
            this.error.json = res.json();
            throw error;
          }

          return res.json();
        })
        .then(json => {
          this.candidate = json;
        })
        .catch(err => {
          this.error = err;
          if (err.json) {
            return err.json.then(json => {
              this.error.message = json.message;
            });
          }
        })
        .then(() => {
          fetch('https://raw.githubusercontent.com/evanmartiin/Parrainages2022/main/data/json/by-candidates/all_candidates.json')
            .then(res => {
              if (!res.ok) {
                const error = new Error(res.statusText);
                this.error.json = res.json();
                throw error;
              }

              return res.json();
            })
            .then(json => {
              let index = json.findIndex((el) => el.nom.replaceAll('  ', ' ') === to.params.id.replaceAll('_', ' '));
              this.nav = {
                prev: json[index - 1],
                next: json[index + 1]
              }
            })
            .catch(err => {
              this.error = err;
              if (err.json) {
                return err.json.then(json => {
                  this.error.message = json.message;
                });
              }
            })
            .then(() => {
              this.loading = false;
            });
        });
  },
  setup(props) {
    const candidate = ref(null);
    const nav = ref(null);
    const loading = ref(true);
    const error = ref(null);
    const party = ref(null);

    party.value = parties.find(el => el.name === props.id.replaceAll('_', ' '))

    function fetchData() {
      loading.value = true;
      
      fetch('https://raw.githubusercontent.com/evanmartiin/Parrainages2022/main/data/json/by-candidates/' + props.id + '.json')
        .then(res => {
          if (!res.ok) {
            const error = new Error(res.statusText);
            error.json = res.json();
            throw error;
          }

          return res.json();
        })
        .then(json => {
          candidate.value = json;
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
              let index = json.findIndex((el) => el.nom.replaceAll('  ', ' ') === props.id.replaceAll('_', ' '));

              nav.value = {
                prev: json[index - 1],
                next: json[index + 1]
              }
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
        });
    }

    onMounted(() => {
      fetchData();
    });

    return {
      candidate,
      nav,
      loading,
      error,
      party
    };
  },
}
</script>

<style scoped lang="scss">
.loading p, .error p {
  text-align: center;
  font-style: italic;
  margin: 50px 0;
}
</style>