<template>
  <div class="hero">
    <div id="text">
      <p>La course aux parrainages a déjà totalisé</p>
      <h1>6225 votes,</h1>
      <p>il reste 21 jours avant la clôture.</p>
    </div>
    <Button id="first" title="C'est quoi ?"/>
    <Button title="Statistiques générales"/>
  </div>
</template>

<script>
import Button from '../Button.vue'

export default {
  name: 'Hero',
  components: {
    Button
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
