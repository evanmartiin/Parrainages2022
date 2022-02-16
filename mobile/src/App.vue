<template>
  <div id="container">
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style lang="scss">
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
</style>
