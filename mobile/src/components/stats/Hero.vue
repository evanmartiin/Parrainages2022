<template>
  <div class="hero">
    <h1>Visualiser par</h1>
    <div class="buttons">
      <Button title="Région"/>
      <Button title="Département"/>
      <Button title="Commune"/>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'Hero',
  components: {
    Button
  }
}
</script>

<style scoped lang="scss">
.hero {
  background-color: #ffffff;
  box-sizing: border-box;
  border: 5px solid #E1000F;
  width: 100%;
  padding: 35px;
  color: #000000;
}

h1 {
  text-align: left;
}

.buttons {
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
</style>
