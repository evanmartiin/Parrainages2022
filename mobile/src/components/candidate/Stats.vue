<template>
  <div class="stats">
    <h1>Statistiques des parrains</h1>
    
    <div class="gender">
      <div class="graph" :style="style">
        <p>{{ Math.round(gender.valeurs.find(el => el.key === "M.").value/gender.total * 100) }}%</p>
        <p>{{ Math.round(gender.valeurs.find(el => el.key === "Mme").value/gender.total * 100) }}%</p>
      </div>
      <div class="caption">
        <p>Homme</p>
        <p>Femme</p>
      </div>
    </div>

    <div class="fonction"></div>
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
  computed: {
    style() {
      const percent = Math.round(this.gender.valeurs.find(el => el.key === "M.").value/this.gender.total * 100)
      return `background: linear-gradient(90deg, #101046 ${percent}%, #799CD0 ${percent}%);`
    },
  },
  mounted() {
    const links = [
      ["Communal", [
        "Maire", "Maire délégué.e d'une commune associée ou d'une commune déléguée", "Président.e d'un EPCI à fiscalité propre", "Conseiller.e métropolitain.e de Lyon", "Conseiller.e de Paris", "Maire d'arrondissement"
      ]],
      ["Départemental", ["Conseiller.e départemental.e"]],
      ["Régional", ["Conseiller.e régional.e", "Membre d'une assemblée d'une collectivité territoriale d'outre-mer à statut particulier"]],
      ["National", ["Sénateur/Sénatrice", "Député.e", "Conseiller à l'Assemblée des Français de l'étranger", "Président du conseil consulaire", "Présidente du conseil consulaire"]],
      ["Européen", ["Représentant.e français.e au Parlement européen"]],
    ]

    const data = [];
    this.functions.valeurs.forEach(el => {
      links.forEach(link => {
        if (link[1].includes(el.key)) {
          let linked = data.find(f => f.name === link[0])

          if (linked) {
            linked.value += el.value;
          } else {
            data.push({ name: link[0], value: el.value})
          }
        }
      })
    });

    data.sort((a, b) => b.value - a.value)

    const finalData = [];
    data.forEach(el => {
      if (el.value/this.functions.total < .1) {
        let linked = finalData.find(f => f.name === "Autre")

        if (linked) {
          linked.value += el.value;
        } else {
          finalData.push({ name: "Autre", value: el.value })
        }
      } else {
        finalData.push(el)
      }
    })
    
    const chart = DonutChart(finalData, {
      name: d => d.name,
      value: d => d.value,
      width: 400,
      height: 400,
      colors: ["#799CD0", "#688fca", "#5581c3", "#4273bd", "#3c68aa"]
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
  margin-bottom: 20px;
}

.gender {
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;

  .graph {
    border-radius: 13px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 3px 12px;
    background: linear-gradient(90deg, #101046 72%, #799CD0 72%);
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    color: #ffffff;
  }

  .caption {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 3px 8px;
  }
}

.fonction {
  svg tspan {
    color: #ffffff;
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
