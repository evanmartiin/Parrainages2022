<template>
  <div class="stats">
    <h1>Statistiques des parrains d'Emmanuel MACRON</h1>
    
    <div class="gender">
      <div class="graph">
        <p>72%</p>
        <p>28%</p>
      </div>
      <div class="caption">
        <p>Homme</p>
        <p>Femme</p>
      </div>
    </div>

    <div class="fonction">
      <img src="@/assets/img/fonction-graph.png" alt="">
      <div class="caption">
        <div class="el">
          <div style="background-color: #C9191E"></div>
          <p>Fonction communale ou intercommunale</p>
        </div>
        <div class="el">
          <div style="background-color: #EB3642"></div>
          <p>Fonction départementale ou régionale</p>
        </div>
        <div class="el">
          <div style="background-color: #FF9292"></div>
          <p>Fonction nationale</p>
        </div>
        <div class="el">
          <div style="background-color: #FCBFBF"></div>
          <p>Fonction européenne</p>
        </div>
        <div class="el">
          <div style="background-color: #FDDEDE"></div>
          <p>Fonction d'outre-mer</p>
        </div>
        <div class="el">
          <div style="background-color: #FEF4F4"></div>
          <p>Autre fonction</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stats'
}
</script>

<style scoped lang="scss">
.stats {
  width: 100%;
  background-color: #000091;
  padding: 35px;
  box-sizing: border-box;
  color: #ffffff;
}

h1 {
  text-align: left;
  margin-bottom: 35px;
}

.gender {
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
}

.gender .graph {
  border: 2px solid #ffffff;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 3px 6px;
  background: linear-gradient(90deg, #000091 72%, #C9191E 72%);
}

.gender .caption {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 3px 6px;
}

.fonction img {
  width: 300px;
}

.fonction .caption {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.fonction .caption .el {
  display: flex;
  align-items: center;
  text-align: left;
}

.fonction .caption .el div {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}
</style>
