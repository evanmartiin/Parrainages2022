<template>
  <div id="container" v-if="width < 500">
    <link rel="stylesheet" href="https://use.typekit.net/biu0dvk.css">
    <router-view/>
    <Footer/>
    <Nav/>
  </div>
  <div v-else id="no-mobile">
    <h1>{{ String.fromCodePoint(0x1F5F3) }}</h1>
    <h1>Cette application est disponible uniquement sur mobile.</h1>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Nav from '@/components/Nav.vue'
import { ref } from "vue"

export default {
  name: 'App',
  components: {
    Footer,
    Nav
  },
  setup() {
    const width = ref(null);

    width.value = window.innerWidth;
    
    return {
      width
    }
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
  top: 0;
}

#no-mobile {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  h1 {
    width: 50%;
    font-size: 3vw;
    text-align: center;

    &:first-of-type {
      font-size: 50px;
      margin-bottom: 20px;
    }
  }
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
