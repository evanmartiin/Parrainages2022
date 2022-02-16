<template>
  <div class="hero">
    <div id="text">
      <p>La course aux parrainages a déjà totalisé</p>
      <h1>6225 votes,</h1>
      <p>il reste 21 jours avant la clôture.</p>
    </div>
    <v-link href="/about"><Button id="first" title="C'est quoi ?"/></v-link>
    <v-link href="/general-stats"><Button title="Statistiques générales"/></v-link>
  </div>
</template>

<script>
import Button from '../Button.vue'
import VLink from '../VLink.vue'

export default {
  name: 'Hero',
  components: {
    Button,
    VLink
  }
}
</script>

<style scoped>
.hero {
  background-color: #000091;
  color: #ffffff;
  padding: 60px 35px;
  width: 100%;
  box-sizing: border-box;
  font-family: "Marianne";
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#text {
  margin-bottom: 60px;
}

p {
  text-align: left;
}

h1 {
  font-size: 36px;
  margin: 5px 0;
  font-weight: bold;
  text-align: left;
}

.hero #first {
  margin-bottom: 20px;
}
</style>
