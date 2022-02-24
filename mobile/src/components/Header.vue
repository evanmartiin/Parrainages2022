<template>
  <div class="header" v-if="width <= 500">
    <router-link id="header-arrow" to="/" @click="this.$root.$emit('nav', 1)"><img v-if="needsBack" src="@/assets/img/arrow-right.png" alt=""></router-link>
  </div>
  <div class="header-desk" v-else>
    <router-link id="header-arrow" to="/" @click="this.$root.$emit('nav', 1)"><img v-if="needsBack" src="@/assets/img/arrow-right.png" alt=""></router-link>
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  name: 'Header',
  props: {
    needsBack: Boolean
  },
  setup() {
    const width = ref(null);

    width.value = window.innerWidth;
    
    return {
      width
    }
  },
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 50px;
  padding: 20px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;

  #header-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    padding: 10px 20px;
    border: 1px solid #DBDBDB;
    border-radius: 50px;
    background-color: #ffffff;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);

    img {
      width: 20px;
      height: 20px;
      transform: rotateZ(180deg);
    }
  }
}

.header-desk {
  height: 50px;
  padding: 20px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: calc(50vw - 250px);

  #header-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    padding: 10px 20px;
    border: 1px solid #DBDBDB;
    border-radius: 50px;
    background-color: #ffffff;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);

    img {
      width: 20px;
      height: 20px;
      transform: rotateZ(180deg);
    }
  }
}
</style>
