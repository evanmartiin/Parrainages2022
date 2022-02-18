<template>
  <div class="candidate-page">
    <h1>{{ name }}</h1>
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
// import { ref, onMounted } from 'vue'

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
    name: String
  }
  // setup() {
  //   const candidates = ref(null);
  //   const loading = ref(true);
  //   const error = ref(null);

  //   async function fetchData() {
  //     loading.value = true;
      
  //     fetch('https://raw.githubusercontent.com/evanmartiin/Parrainages2022/main/data/json/by-candidates/all_candidates.json')
  //       .then(res => {
  //         if (!res.ok) {
  //           const error = new Error(res.statusText);
  //           error.json = res.json();
  //           throw error;
  //         }

  //         return res.json();
  //       })
  //       .then(json => {
  //         candidates.value = json;
  //       })
  //       .catch(err => {
  //         error.value = err;
  //         if (err.json) {
  //           return err.json.then(json => {
  //             error.value.message = json.message;
  //           });
  //         }
  //       })
  //       .then(() => {
  //         loading.value = false;
  //       });
  //   }

  //   onMounted(() => {
  //     fetchData();
  //   });

  //   return {
  //     candidates,
  //     loading,
  //     error
  //   };
  // }
}
</script>