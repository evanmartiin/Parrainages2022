import fetch from "node-fetch";

export let data;

export default async function fetchData() {
  await fetch(
    "https://presidentielle2022.conseil-constitutionnel.fr/telechargement/parrainagestotal.txt"
  )
    .then((response) => response.text())
    .then((res) => (data = JSON.parse(res).data));
}
