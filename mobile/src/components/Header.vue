<template>
  <div class="header">
    <img id="header-arrow" v-if="needsBack" src="../assets/img/arrow.png" alt="">
    <img id="header-img" src="../assets/img/header-img.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    needsBack: Boolean
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  background-color: #000091;
  padding: 16px 0;
  display: grid;
  grid-template-columns: 1fr 30px 2fr 100px 2fr 30px 1fr;
  align-items: center;
}

#header-arrow {
  width: 30px;
  height: 30px;
  grid-column: 2/3;
}

#header-img {
  width: 100px;
  grid-column: 4/5;
}
</style>
