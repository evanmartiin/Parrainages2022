<template>
  <div id="app">
    <!-- <Home/> -->
    <!-- <CandidatePage/> -->
    <!-- <GeneralStats/> -->
    <About/>
    <Footer/>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import CandidatePage from './pages/CandidatePage.vue'
import Footer from './components/Footer.vue'
import GeneralStats from './pages/GeneralStats.vue'
import About from './pages/About.vue'

export default {
  name: 'App',
  components: {
    Home,
    CandidatePage,
    Footer,
    GeneralStats,
    About
  }
}
</script>

<style>
@font-face {
  font-family: "Marianne";
  src: url(./assets/fonts/Marianne-Regular.otf) format("opentype");
}
@font-face {
  font-family: "Marianne";
  font-style: italic;
  src: url(./assets/fonts/Marianne-RegularItalic.otf) format("opentype");
}
@font-face {
  font-family: "Marianne";
  font-weight: bold;
  src: url(./assets/fonts/Marianne-Bold.otf) format("opentype");
}

body {
  margin: 0;
  background-color: #000091;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  font-family: "Marianne";
  font-weight: bold;
  font-size: 24px;
  margin: 0;
}

h2 {
  font-family: "Marianne";
  font-weight: bold;
  font-size: 20px;
  margin: 0;
}

p {
  font-family: "Marianne";
  font-size: 14px;
  margin: 0;
}

link {
  display: block;
}
</style>
