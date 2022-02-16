<template>
  <div class="map">
    <div class="buttons">
      <Button title="PÉCRESSE" :blue="true" :reverse="true"/>
      <Button title="HIDALGO" :blue="true"/>
    </div>
    <div class="carte">
      <p>Nombre de parrainages au 15 février</p>
      <img src="@/assets/img/france-dep.png" alt="">
    </div>
    <div class="legend">
      <div class="legendEl">
        <div style="background-color: #F7EBEB"></div>
        <p>0 à 5</p>
      </div>
      <div class="legendEl">
        <div style="background-color: #F3B3AF"></div>
        <p>5 à 10</p>
      </div>
      <div class="legendEl">
        <div style="background-color: #EC483E"></div>
        <p>+10</p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'Map',
  components: {
    Button
  }
}
</script>

<style scoped lang="scss">
.map {
  width: 100%;
  background-color: #000091;
  padding: 35px;
  box-sizing: border-box;
}

.buttons {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
}

.carte {
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carte img {
  width: 300px;
  margin-top: 15px;
}

.legend {
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin-left: 50%;
  transform: translateX(-50%);
}

.legendEl {
  display: flex;
  color: #ffffff;
}

.legendEl div {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
}
</style>
