<template>
  <div class="hero">
    <h1>Visualiser par</h1>
    <div class="buttons">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero'
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
