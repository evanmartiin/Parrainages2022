<template>
  <div class="search" v-if="!loading">
    <h1>Rechercher une ville</h1>
    <input type="text" name="" id="" v-model="search" placeholder="Bordeaux, Rennes, Ploudaniel...">
    <p class="info" v-if="filteredList.length">{{ filteredList.length }} résultat{{ filteredList.length > 1 ? "s" : "" }}</p>
    <div class="result" v-for="find in filteredList" :key="find.nom + find.vote + Math.random()">
      <p><span>Le maire de</span> {{ find.nom }}<br><span>a voté pour</span> {{ find.vote }}</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue"

export default {
  name: 'Search',
  setup() {
    const communes = ref(null);
    const loading = ref(true);
    const error = ref(null);
    const search = ref("")

    async function fetchData() {
      loading.value = true;
      
      fetch('https://raw.githubusercontent.com/evanmartiin/Parrainages2022/main/data/json/by-communes/all_communes.json')
        .then(res => {
          if (!res.ok) {
            const error = new Error(res.statusText);
            error.json = res.json();
            throw error;
          }

          return res.json();
        })
        .then(json => {
          communes.value = json;
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

    const filteredList = computed(() => {
      if (search.value.replace(/\s/g, '').length >= 2) {
        return communes.value.filter(com => {
          return com.nom.toLowerCase().includes(search.value.replace(/\s/g, '').toLowerCase())
        })
      } else {
        return ""
      }
    });

    return {
      communes,
      loading,
      error,
      filteredList,
      search
    };
  }
}
</script>

<style scoped lang="scss">
.search {
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
}

h1 {
  margin-bottom: 20px;
}

input {
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);
  background-color: #D67878;
  color: #ffffff;
  font-size: 15px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
}

input:focus {
  outline: none;
}

input::placeholder {
  color: #ffffff;
  font-style: italic;
  opacity: .5;
}

.info {
  font-style: italic;
}

.result {
  padding: 20px;
  border-radius: 13px;
  box-shadow: 0px 5px 100px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 15px;

  p {
    font-weight: 600;
    opacity: 1;

    span {
      font-weight: 500;
      opacity: .5;
    }
  }
}
</style>
