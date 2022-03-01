<template>
  <div class="footer">
    <h1>Le 10 Avril, allez voter {{ String.fromCodePoint(0x1F5F3) }}</h1>
    <button class="btn" onclick="window.open('https://www.service-public.fr/particuliers/vosdroits/R51788', '_blank')">Vérifier si je suis<br>sur les listes électorales</button>
    <p>Site non-gouvernemental — <a href="https://twitter.com/evantinmar" target="_blank">@evantinmar</a></p>
    <p>Projet open-source (<a href="https://github.com/evanmartiin/Parrainages2022/" target="_blank">GitHub</a>)</p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
.footer {
  color: #000000;
  box-sizing: border-box;
  padding: 35px;
  padding-bottom: 125px;
  margin-top: 20px;
  text-align: center;
}

a {
  font-style: italic;
  color: #000000;
}

.btn {
  font-style: normal;
  font-family: sofia-pro, sans-serif;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);
  color: #ffffff;
  border: none;
  background-color: #799CD0;
  border-radius: 30px;
  padding: 10px 30px;
  margin: 20px auto 60px auto;
}
</style>
