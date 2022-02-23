<template>
  <div class="home">
    <Hero v-if="!loading" :candidates="candidates"/>
    <button class="add-button">Add to home screen</button>
    <CandidatesList :candidates="candidates" :loading="loading" :error="error"/>
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
  },
  mounted() {
    let deferredPrompt;
    const addBtn = document.getElementsByClassName('add-button')[0];
    addBtn.style.display = 'none';
    
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI to notify the user they can add to home screen
      addBtn.style.display = 'block';
    
      addBtn.addEventListener('click', () => {
        // hide our user interface that shows our A2HS button
        addBtn.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
          });
      });
    });

  }
}

</script>

<style>
.add-button {
  position: absolute;
  top: 1px;
  left: 1px;
}
</style>