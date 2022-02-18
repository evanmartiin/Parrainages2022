<template>
  <div v-if="podium" class="candidate podium">
    <img src="@/assets/img/candidates/PÉCRESSE.png" alt="">
    <div class="content">
      <h2>{{ rank }}. {{ name }}</h2>
      <p>{{ votes }} parrainages</p>
      <router-link to="/candidate" :name="name"><Button title="Voir en détail"/></router-link>
    </div>
  </div>
  <div v-else class="candidate no-podium">
    <img src="@/assets/img/candidates/PÉCRESSE.png" alt="">
    <div class="content">
      <h2>{{ rank }}. {{ name }}</h2>
      <p>{{ votes }} parrainages</p>
    </div>
    <router-link to="/candidate"><Button :light="true"/></router-link>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'Candidate',
  props: {
    rank: Number,
    name: String,
    votes: Number,
    podium: Boolean
  },
  components: {
    Button
  }
}
</script>

<style scoped lang="scss">
.candidate.podium {
  display: grid;
  grid-template-columns: 70px 15px 1fr;
}

.podium img {
  grid-column: 1/2;
  width: 70px;
  border: 4px solid #E1000F;
  box-sizing: border-box;
  border-radius: 50%;
}

.podium .content {
  grid-column: 3/4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

h2 {
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
}

.podium .button {
  margin-top: 15px;
}

.candidate.no-podium {
  display: grid;
  grid-template-columns: 60px 15px 1fr 15px 30px;
}

.no-podium img {
  grid-column: 1/2;
  width: 60px;
  border: 4px solid #E1000F;
  box-sizing: border-box;
  border-radius: 50%;
}

.no-podium .content {
  grid-column: 3/4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100vw - 190px);
}

.no-podium .light-button {
  grid-column: 5/6;
}
</style>
