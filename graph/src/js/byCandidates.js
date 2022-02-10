import * as d3 from "d3";

export default async function byCandidates(candidate) {
    const data = await fetch("https://raw.githubusercontent.com/evanmartiin/Parrainages2022/main/data/json/by-candidates/" + candidate.nom.replace(/\s+/g, '_') + ".json")
      .then((response) => response.text())
      .then((res) => JSON.parse(res));
      const departments = data.stats.departement.valeurs;
      
      const legend = document.getElementsByClassName("legend")[0]
      legend.innerHTML = "";
      const title = document.createElement("p");
      title.classList.add("title");
      title.innerHTML = "Top départements"
      legend.appendChild(title)

      const svgs = Array.from(document.getElementsByTagName("path"))

      svgs.forEach(svg => {
        svg.setAttribute("stroke", "#000");
        svg.setAttribute("stroke-miterlimit", "3.974");
        svg.setAttribute("stroke-width", ".2");
        svg.setAttribute("fill", "#ddd")
      })
  
      departments.forEach(dep => {
          const svg = svgs.find(el => el.attributes?.title?.value === dep.key);
  
          if (svg) {
              const color = `rgba(255, 50, 50, ${dep.value / departments[0].value})`;
              svg.setAttribute("fill", color)

              const div = document.createElement("div")
              div.classList.add("element");
              const colorDom = document.createElement("div")
              colorDom.classList.add("color");
              colorDom.style.backgroundColor = color;
              const divName = document.createElement("p")
              divName.classList.add("name");
              divName.innerHTML = `${dep.rang}. ${dep.key}`
              const divValue = document.createElement("p")
              divValue.classList.add("value");
              divValue.innerText = dep.value > 1 ? `${dep.value} parrainages` : `${dep.value} parrainage`;
              div.appendChild(colorDom)
              div.appendChild(divName)
              div.appendChild(divValue)
              legend.appendChild(div)
            }

      })
      
      let currentDate = new Date().toLocaleDateString("fr-FR", {
        month: "2-digit",
        day: "2-digit",
      });
      document.getElementsByClassName("title")[0].innerHTML = `Parrainages de ${candidate.nom} par départements au ${currentDate}`;
      document.getElementsByClassName("subtitle")[0].innerHTML = `${candidate.rang}ème place</br>${candidate.votes_totaux} votes${candidate.votes_confirmes !== candidate.votes_totaux ? ` dont ${candidate.votes_confirmes} valables` : ''}</br>${candidate.valide ? "Qualifié.e" : "Pas encore qualifié.e"}`;

      const rawDates = data.stats.date.valeurs
      rawDates.forEach(date => { date.key = Date.parse(date.key) })
      rawDates.sort((a, b) => a.key - b.key)
      
      const dates = [];
      let total = 0;
      rawDates.forEach(date => {
          total += date.value;
        dates.push({ date: date.key, votes: date.value, total })
      })

      d3.select("#time-graph").remove()
      document.getElementsByClassName("time-graph")[0].style.display = "none";
      
      if (dates.length > 1) {
          let graph = document.createElement("div")
          graph.id = "time-graph"
          document.getElementsByClassName("time-graph")[0].style.display = "flex";
        document.getElementsByClassName("time-graph")[0].prepend(graph)

        // set the dimensions and margins of the graph
            var margin = {top: 10, right: 10, bottom: 20, left: 40},
                width = 300 - margin.left - margin.right,
                height = 200 - margin.top - margin.bottom;

            // append the svg object to the body of the page
            var svg = d3.select("#time-graph")
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");

                // Add X axis --> it is a date format
                var x = d3.scaleTime()
                .domain(d3.extent(dates, function(d) { return d.date; }))
                .range([ 0, width ]).nice();
                svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));

                // Add Y axis
                var y = d3.scaleLinear()
                .domain([0, d3.max(dates, function(d) { return +d.total; })])
                .range([ height, 0 ]).nice();
                svg.append("g")
                .call(d3.axisLeft(y));

                // Add the line
                svg.append("path")
                .datum(dates)
                .attr("fill", "none")
                .attr("stroke", "#0D21A1")
                .attr("stroke-width", 1.5)
                .attr("d", d3.line()
                    .x(function(d) { return x(d.date) })
                    .y(function(d) { return y(d.total) }))
      }
}