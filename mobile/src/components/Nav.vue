<template>
  <div class="nav">
    <router-link to="/" :style="opacity1" @click="active = 1">
      <img src="@/assets/img/user-icon.png" alt="">
      <p>Candidats</p>
    </router-link>
    <router-link to="/general" :style="opacity2" @click="active = 2">
      <img src="@/assets/img/chart-icon.png" alt="">
      <p>Statistiques</p>
    </router-link>
    <router-link to="/search" :style="opacity3" @click="active = 3">
      <img src="@/assets/img/search-icon.png" style="width: 22px;" alt="">
      <p>Rechercher</p>
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  name: 'Nav',
  setup() {
    const active = ref(null)

    active.value = 1

    return {
      active
    }
  },
  computed: {
    opacity1() {
      const opacity = this.active === 1 ? '1' : '.5'
      return 'opacity: ' + opacity + ';'
    },
    opacity2() {
      const opacity = this.active === 2 ? '1' : '.5'
      return 'opacity: ' + opacity + ';'
    },
    opacity3() {
      const opacity = this.active === 3 ? '1' : '.5'
      return 'opacity: ' + opacity + ';'
    },
  }
}
</script>

<style scoped lang="scss">
.nav {
  color: #000000;
  box-sizing: border-box;
  padding: 15px 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;

  a {
    img {
      width: 25px;
    }

    p {
      font-size: 12px;
      font-weight: 600;
    }
  }
}
</style>
