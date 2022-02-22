<template>
  <div id="container">
    <link rel="stylesheet" href="https://use.typekit.net/biu0dvk.css">
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
$red: #D67878;
$yellow: #FFDD9B;
$green: #71DBA8;
$white: #FFFFFF;
$black: #000000;

body {
  margin: 0;
}

h1 {
  font-family: sofia-pro, sans-serif;
  font-weight: 600;
  font-size: 24px;
  margin: 0;
}

h2 {
  font-family: sofia-pro, sans-serif;
  font-weight: 700;
  font-size: 16px;
  margin: 0;
}

p {
  font-family: sofia-pro, sans-serif;
  font-weight: 500;
  font-size: 14px;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: inherit;
}
</style>
