<template>
  <div class="stats">
    <h1>Statistiques des parrains</h1>
    
    <div class="gender">
      <div class="graph">
        <p>{{ Math.round(gender.valeurs.find(el => el.key === "M.").value/gender.total * 100) }}%</p>
        <p>{{ Math.round(gender.valeurs.find(el => el.key === "Mme").value/gender.total * 100) }}%</p>
      </div>
      <div class="caption">
        <p>Homme</p>
        <p>Femme</p>
      </div>
    </div>

    <div class="fonction">
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
import * as d3 from "d3"
import DonutChart from "../../utils/DonutChart"

export default {
  name: 'Stats',
  props: {
    gender: Object,
    functions: Object
  },
  mounted() {
    const chart = DonutChart(this.functions.valeurs, {
      name: d => d.key,
      value: d => d.value,
      width: 500,
      height: 500
    })
    chart.id = "pie-graph"
    d3.select("#pie-graph").remove()
    document.getElementsByClassName("fonction")[0].prepend(chart)
  }
}
</script>

<style scoped lang="scss">
.stats {
  box-sizing: border-box;
  padding: 20px;
  margin-top: 50px;
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

  .graph {
    border: 2px solid #ffffff;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 3px 6px;
    background: linear-gradient(90deg, #000091 72%, #C9191E 72%);
  }

  .caption {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 3px 6px;
  }
}

.fonction {
  img {
    width: 300px;
  }

  .caption {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    .el {
      display: flex;
      align-items: center;
      text-align: left;

      div {
        width: 30px;
        height: 30px;
        margin-right: 5px;
      }
    }
  }
}
</style>
