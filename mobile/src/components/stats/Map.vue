<template>
  <div class="map">
    <div class="carte">
      <p>Nombre de parrainages au 15 février</p>
    </div>
    <div class="legend">
      <div class="legendEl">
        <p class="rank">#1</p>
        <div style="background-color: #F7EBEB"></div>
        <p>MACRON</p>
      </div>
      <div class="legendEl">
        <p class="rank">#2</p>
        <div style="background-color: #F3B3AF"></div>
        <p>PÉCRESSE</p>
      </div>
      <div class="legendEl">
        <p class="rank">#3</p>
        <div style="background-color: #EC483E"></div>
        <p>HIDALGO</p>
      </div>
      <div class="legendEl">
        <p class="rank">#4</p>
        <div style="background-color: #F7EBEB"></div>
        <p>MACRON</p>
      </div>
      <div class="legendEl">
        <p class="rank">#5</p>
        <div style="background-color: #F3B3AF"></div>
        <p>PÉCRESSE</p>
      </div>
      <div class="legendEl">
        <p class="rank">#6</p>
        <div style="background-color: #EC483E"></div>
        <p>HIDALGO</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Map'
}
</script>

<style scoped lang="scss">
.map {
  width: 100%;
  background-color: #000091;
  padding: 35px;
  box-sizing: border-box;
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
  align-content: space-between;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
}

.legendEl {
  display: flex;
  width: 45%;
  gap: 5px;
  color: #ffffff;
}

.legendEl .rank {
  width: 20px;
  text-align: right;
}

.legendEl div {
  width: 20px;
  height: 20px;
}
</style>
