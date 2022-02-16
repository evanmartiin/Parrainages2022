<template>
  <div class="hero">
    <div class="details">
      <img src="../../assets/img/candidates/PÉCRESSE.png" alt="">
      <div class="text">
        <h1>Emmanuel MACRON</h1>
        <p><a href="">La République en Marche</a></p>
      </div>
    </div>
    <div class="stats">
      <div class="rank">
        <img src="../../assets/img/rank.png" alt="">
        <p>2ème place</p>
      </div>
      <div class="votes">
        <img src="../../assets/img/votes.png" alt="">
        <p>1050 parrainages <br><span>dont 1023 valables</span></p>
        <div class="validated">Qualifié</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
.hero {
  background-color: #ffffff;
  box-sizing: border-box;
  border: 5px solid #E1000F;
  width: 100%;
  padding: 35px;
  color: #000000;
}

.details {
  width: 100%;
  display: grid;
  grid-template-columns: 60px 15px 1fr;
  align-items: center;
}

.details img {
  grid-column: 1/2;
  width: 60px;
  border: 4px solid #E1000F;
  box-sizing: border-box;
  border-radius: 50%;
}

.details .text {
  grid-column: 3/4;
  text-align: left;
}

.details h1 {
  margin-bottom: 5px;
}

.details a {
  color: #000000;
}

.stats {
  margin-top: 35px;
  margin-left: 30px;
}

.rank {
  margin-bottom: 15px;
}

.rank, .votes {
  display: flex;
  align-items: center;
}

.rank img, .votes img {
  width: 30px;
  margin-right: 15px;
}

.rank p, .votes p {
  text-align: left;
  line-height: 1rem;
}

.votes span {
  font-size: 11px;
  font-style: italic;
}

.votes .validated {
  background-color: #000091;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  padding: 2px 10px;
  margin-left: 15px;
  font-family: "Marianne";
}
</style>
