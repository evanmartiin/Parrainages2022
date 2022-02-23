<template>
  <div class="departments">
    <div class="top">
      <h1>Top départements</h1>
      <div class="podium">
        <div v-for="dep in deps.slice(0, 3)" class="el" :key="dep.key">
          <img v-if="dep.rang === 1" src="@/assets/img/first-place.png" alt="">
          <img v-else-if="dep.rang === 2" src="@/assets/img/second-place.png" alt="">
          <img v-else src="@/assets/img/third-place.png" alt="">
          <div class="content">
            <h2>{{ dep.key }}</h2>
            <p>{{ dep.value }} parrainage{{ dep.value > 1 ? "s" : "" }}</p>
          </div>
        </div>
      </div>
    </div>

    <h1 id="line-title" v-if="dates.length > 1">Évolution</h1>
    <div class="line-graph" v-if="dates.length > 1">
      <p>Évolution du nombre de parrainages</p>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3"

export default {
  name: 'Departments',
  props: {
    deps: Object,
    dates: Object
  },
  mounted() {
    let rawDates = [...this.dates]
    rawDates.forEach(date => { date.key = Date.parse(date.key) })
    rawDates.sort((a, b) => a.key - b.key)
    
    const dates = [];
    let total = 0;
    rawDates.forEach(date => {
        total += date.value;
      dates.push({ date: date.key, votes: date.value, total })
    })

    
    if (dates.length > 1) {
      d3.select("#line-graph").remove()
      document.getElementsByClassName("line-graph")[0].style.display = "none";
      let graph = document.createElement("div")
      graph.id = "line-graph"
      document.getElementsByClassName("line-graph")[0].style.display = "flex";
      document.getElementsByClassName("line-graph")[0].prepend(graph)

      const tickFormats = []
      const datesT = []
      dates.forEach((date, index) => {
        let dateObj = new Date(date.date);
        if (!(index % 2)) {
          tickFormats.push(('0' + dateObj.getDate()).slice(-2) + '/'
          + ('0' + (dateObj.getMonth()+1)).slice(-2))
          datesT.push(date.date)
        }
      })

      // set the dimensions and margins of the graph
      var margin = {top: 10, right: 10, bottom: 20, left: 40},
        width = 300 - margin.left - margin.right,
        height = 200 - margin.top - margin.bottom;

      // append the svg object to the body of the page
      var svg = d3.select("#line-graph")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // Add X axis --> it is a date format
      var x = d3.scaleLinear()
        .domain(d3.extent(dates, function(d) { return d.date; }))
        .range([ 0, width ]);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickValues(datesT).tickFormat((d, i) => tickFormats[i]));

      // Add Y axis
      var y = d3.scaleLinear()
        .domain([0, d3.max(dates, function(d) { return +d.total; })])
        .range([ height, 0 ]).nice();
      svg.append("g")
        .call(d3.axisLeft(y).ticks(5));

      // Add the line
      svg.append("path")
        .datum(dates)
        .attr("fill", "none")
        .attr("stroke", "#ffffff")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return y(d.total) }))
      }
  }
}
</script>

<style scoped lang="scss">
.departments {
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  margin-top: 50px;
  color: #000000;
}

.top {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#line-title {
  margin-top: 70px;
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

  img {
    width: 30px;
    height: 30px;
  }

  .content {
    text-align: left;
  }
}

h1 {
  margin-bottom: 20px;
}

.line-graph {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #ffffff;
  background-color: #D67878;
  padding: 20px;
  border-radius: 13px;
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
}
</style>
