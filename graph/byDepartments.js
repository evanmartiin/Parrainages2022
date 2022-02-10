import { colors } from "./public/colors"

export default async function byDepartments () {
    let data = await fetch("https://raw.githubusercontent.com/evanmartiin/Parrainages2022/main/data/json/by-departments/all_departments.json")
      .then((response) => response.text())
      .then((res) => JSON.parse(res));

    let candidates = await fetch("https://raw.githubusercontent.com/evanmartiin/Parrainages2022/main/data/json/by-candidates/all_candidates.json")
    .then((response) => response.text())
    .then((res) => JSON.parse(res));
  
      let svgs = Array.from(document.getElementsByTagName("path"))
  
      data.forEach(dep => {
          let svg = svgs.find(el => el.attributes.title?.value === dep.nom);
  
          if (svg) {
              let linkedColor = colors.find(el => el.name === dep.votes[0].key);
              let color = linkedColor ? linkedColor.color : "#eeeeee";
              
              svg.setAttribute("stroke", "#000");
              svg.setAttribute("stroke-miterlimit", "3.974");
              svg.setAttribute("stroke-width", ".2");
              svg.setAttribute("fill", color)
          }
      })

      const legend = document.getElementsByClassName("legend")[0]
      legend.innerHTML = "";
      const title = document.createElement("p");
      title.classList.add("title");
      title.innerHTML = "Top candidats"
      legend.appendChild(title)

      candidates.forEach(candidate => {
        const div = document.createElement("div")
        div.classList.add("element");
        const colorDom = document.createElement("div")
        colorDom.classList.add("color");
        let linkedColor = colors.find(el => el.name === candidate.nom)
        let color = linkedColor ? linkedColor.color : "#eeeeee";
        colorDom.style.backgroundColor = color;
        const divName = document.createElement("p")
        divName.classList.add("name");
        divName.innerHTML = `${candidate.rang}. ${candidate.nom}`
        const divValue = document.createElement("p")
        divValue.classList.add("value");
        divValue.innerText = candidate.votes_confirmes > 1 ? `${candidate.votes_confirmes} parrainages` : `${candidate.votes_confirmes} parrainage`;
        div.appendChild(colorDom)
        div.appendChild(divName)
        div.appendChild(divValue)
        legend.appendChild(div)
      })
      
      let currentDate = new Date().toLocaleDateString("fr-FR", {
        month: "2-digit",
        day: "2-digit",
      });
      document.getElementsByClassName("title")[0].innerHTML = `Candidat en tête des parrainages par départements au ${currentDate}`;
      document.getElementsByClassName("subtitle")[0].innerHTML = "Les cas d'égalité ne sont pas encore gérés. En cas d'égalité, le premier alphabétiquement est donné.</br>N'hésitez pas à <a href='https://github.com/evanmartiin/Parrainages2022' target='_blank'>m'aider</a> ✌️";
      document.getElementsByClassName("time-graph")[0].style.display = "none";

}