<template>
  <div class="departments">
    <div class="top">
      <h1>Top départements</h1>
      <div class="podium">
        <div class="el">
          <img src="@/assets/img/first-place.png" alt="">
          <div class="content">
            <h2>Ardèche</h2>
            <p>41 parrainages</p>
          </div>
        </div>
        <div class="el">
          <img src="@/assets/img/second-place.png" alt="">
          <div class="content">
            <h2>Territoire de Belfort</h2>
            <p>32 parrainages</p>
          </div>
        </div>
        <div class="el">
          <img src="@/assets/img/third-place.png" alt="">
          <div class="content">
            <h2>Yvelines</h2>
            <p>26 parrainages</p>
          </div>
        </div>
      </div>
      <Button title="Voir plus"/>
    </div>

    <div class="line-graph">
      <p>Évolution du nombre de parrainages</p>
      <img src="@/assets/img/line-graph.png" alt="">
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'Departments',
  components: {
    Button
  }
}
</script>

<style scoped lang="scss">
.departments {
  background-color: #ffffff;
  box-sizing: border-box;
  border: 5px solid #E1000F;
  width: 100%;
  padding: 35px;
  color: #000000;
}

.top {
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: flex-start;
  margin-bottom: 60px;
}

.podium {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
}

.el {
  display: flex;
  gap: 5px;
  align-items: center;
}

.el img {
  width: 30px;
  height: 30px;
}

.el .content {
  text-align: left;
}

.line-graph {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.line-graph img {
  width: 300px;
  margin-top: 15px;
}
</style>
