<template>
  <div class="general-stats">
    <Header :needsBack="true"/>
    <!-- <Hero/> -->
    <Map v-if="!loading" :deps="deps"/>
    <Departments v-if="!loading" :deps="deps"/>
    <!-- <Stats/> -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
// import Hero from '@/components/stats/Hero.vue'
import Map from '@/components/stats/Map.vue'
import Departments from '@/components/stats/Departments.vue'
// import Stats from '@/components/candidate/Stats.vue'
import { ref, onMounted } from 'vue'

export default {
  name: 'CandidatePage',
  components: {
    Header,
    // Hero,
    Map,
    Departments,
    // Stats
  },
  setup() {
    const deps = ref(null);
    const loading = ref(true);
    const error = ref(null);

    function fetchData() {
      loading.value = true;
      
      fetch('https://raw.githubusercontent.com/evanmartiin/Parrainages2022/main/data/json/by-departments/all_departments.json')
        .then(res => {
          if (!res.ok) {
            const error = new Error(res.statusText);
            error.json = res.json();
            throw error;
          }

          return res.json();
        })
        .then(json => {
          deps.value = json;
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
      deps,
      loading,
      error
    };
  },
}
</script>