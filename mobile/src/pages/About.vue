<template>
  <div class="about">
    <Header :needsBack="true"/>
    <div class="content">
      <h1>C'est quoi un <span>parrainage</span> ?</h1>
      <p>Logoden biniou degemer mat, an. Tregont koumanant gegin pad, stal. Strad eget familh kustum, spont. Pont-Aven brumenn Lokmikael (an-Traezh) difenn, poultrenn. Pegeit kribañ grib gouest, adaozañ. Werenn gloan Pempoull me, c’hezeg. Outo kroc’hen sec’hañ skuizhañ, vantell. Genver ar ur eme , karantez. War kregiñ voulouz ivin, a. Perros-Gireg goap anavezout kouevr, ober.
        <br><br>Gouiziek beg war wechoù, kanañ. Ac'hanoc'h poazhañ tro tra, koant. C’hoar ankouna’haat hi tro, c’houzoug. Houarn wechoù liorzh holen, prizius. Da hemañ kreisteiz mevel, rumm. Douarnenez warnoc'h Kemper skuizh, stourm. Mouezh ahont Skos amañ, hemañ. Louet kaol hi c’hroc’hen, eo. Pod dimeziñ bro dienn, grib. Veaj out gouelañ kazetenn, bloavezh.
        <br><br>Evezh eoul C’hall korn, treuziñ. Penn ni hervez  anezho, ha. Druez trouz heol biz, noazh. War asied doujañs bern, ael.</p>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'About',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
.content {
  color: #ffffff;
  width: 100%;
  background-color: #000091;
  padding: 35px;
  box-sizing: border-box;
}

h1 {
  text-align: left;
}

h1 span {
  position: relative;
}

h1 span:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-bottom: 2px solid #E1000F;
}

p {
  margin-top: 35px;
  text-align: left;
}
</style>
