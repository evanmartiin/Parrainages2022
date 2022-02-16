<template>
  <div class="header">
    <router-link id="header-arrow" to="/"><img v-if="needsBack" src="@/assets/img/arrow.png" alt=""></router-link>
    <img id="header-img" src="@/assets/img/header-img.png" alt="">
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

<style scoped lang="scss">
.header {
  width: 100%;
  background-color: #000091;
  padding: 16px 0;
  display: grid;
  grid-template-columns: 1fr 30px 2fr 100px 2fr 30px 1fr;
  align-items: center;

  #header-arrow {
    grid-column: 2/3;

    img {
      width: 30px;
      height: 30px;
    }
  }

  #header-img {
    width: 100px;
    grid-column: 4/5;
  }
}
</style>
