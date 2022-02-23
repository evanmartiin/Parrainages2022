<template>
  <div class="nav">
    <router-link to="/">
      <img src="@/assets/img/user-icon.png" alt="">
      <p>Candidats</p>
    </router-link>
    <router-link to="/general">
      <img src="@/assets/img/chart-icon.png" alt="">
      <p>Statistiques</p>
    </router-link>
    <router-link to="/search">
      <img src="@/assets/img/search-icon.png" style="width: 22px;" alt="">
      <p>Rechercher</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Nav'
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
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;

  a {
    img {
      width: 25px;
    }

    p {
      font-size: 12px;
    }
  }
}
</style>
