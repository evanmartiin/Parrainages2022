<template>
  <Splide :options="{ arrows: false }">
    <SplideSlide>
      <h1>4 candidats</h1>
      <p>sont déjà qualifiés pour le premier tour de l'élection présidentielle</p>
    </SplideSlide>
    <SplideSlide>
      <h1>4 candidats</h1>
      <p>sont déjà qualifiés pour le premier tour de l'élection présidentielle</p>
    </SplideSlide>
    <SplideSlide>
      <h1>4 candidats</h1>
      <p>sont déjà qualifiés pour le premier tour de l'élection présidentielle</p>
    </SplideSlide>
  </Splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default {
  name: 'Hero',
  components: {
    Splide,
    SplideSlide
  }
}
</script>

<style scoped lang="scss">
.splide__slide {
  background-image: url('../../assets/img/france.png');
  background-position: center center;
  background-size: cover;
  color: #ffffff;
  border-radius: 15px;
  flex: 0 0 calc(95% - 40px);
  padding: 60px 20px 80px 20px;
  margin: 20px 0 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 40px;
  }

  p {
    font-size: 18px;
  }

  &:last-of-type {
    margin-right: 20px;
  }
}
</style>
