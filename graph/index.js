import byCandidates from "./byCandidates";
import byDepartments from "./byDepartments";

// document.getElementById("filterByRegions").addEventListener("click", byRegions);
document.getElementById("filterByDepartments").addEventListener("click", byDepartments);
// document.getElementById("filterByCommunes").addEventListener("click", byCommunes);

const setup = async () => {
    let select = document.getElementById("filterByCandidates");
    let candidates = await fetch("https://raw.githubusercontent.com/evanmartiin/Parrainages2022/main/data/json/by-candidates/all_candidates.json")
      .then((response) => response.text())
      .then((res) => JSON.parse(res));

      candidates.sort(alphabet);
      candidates.sort((a, b) => a.rang - b.rang);
    
    candidates.forEach((candidate, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.innerHTML = `${candidate.rang}. ${candidate.nom}`;
        select.appendChild(option)
    });

    select.addEventListener("change", (e) => {
        byCandidates(candidates[e.target.value])
    })
}

setup()

const alphabet = (a, b) => {
    if (a.nom < b.nom) return -1;
    else if (a.nom == b.nom) return 0;
    else return 1;
  };