<template>
  <Splide :options="{ arrows: false }">
    <SplideSlide>
      <h1>{{ validatedCandidates }} candidats</h1>
      <p>sont déjà qualifiés pour le premier tour de l'élection présidentielle</p>
    </SplideSlide>
    <SplideSlide>
      <h1>{{ nbVotes }}</h1>
      <p>parrainages ont été donnés par des élus aux candidats</p>
    </SplideSlide>
    <SplideSlide>
      <h1>{{ Math.round(100 - nbVotes / 420) }}%</h1>
      <p>des parrainages n'ont pas encore été utilisés par les élus éligibles</p>
    </SplideSlide>
  </Splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { ref } from 'vue'

export default {
  name: 'Hero',
  components: {
    Splide,
    SplideSlide
  },
  props: {
    candidates: Object
  },
  setup(props) {
    const validatedCandidates = ref(0);
    const nbVotes = ref(0);
    
    props.candidates.forEach(el => {
      if (el.valide) validatedCandidates.value++;
      nbVotes.value += el.votes_totaux;
    });

    return {
      validatedCandidates,
      nbVotes
    };
  }
}
</script>

<style scoped lang="scss">
.splide__slide {
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
  justify-content: center;

  &:first-of-type {
    background-image: url('../../assets/img/france.png');
  }

  &:nth-of-type(2) {
    background-image: url('../../assets/img/hands.png');
  }

  &:last-of-type {
    background-image: url('../../assets/img/vote.png');
  }

  h1 {
    font-size: 50px;
  }

  p {
    font-size: 18px;
  }

  &:last-of-type {
    margin-right: 20px;
  }
}
</style>
