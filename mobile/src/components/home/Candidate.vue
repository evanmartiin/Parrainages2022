<template>
  <router-link :to="getDestination" class="candidate">
    <img class="profile" :src="getImgUrl">
    <div class="content">
      <h2>{{ rank }}. {{ name }}</h2>
      <p><img v-if="votes >= 500" class="checked" src="@/assets/img/checked.png" alt=""> {{ votes }} <span>/ 500 parrainages</span></p>
      <div class="progress" :style="style"></div>
    </div>
    <img class="arrow" src="@/assets/img/arrow-right.png" alt="">
  </router-link>
</template>

<script>
export default {
  name: 'Candidate',
  props: {
    rank: Number,
    name: String,
    votes: Number
  },
  computed: {
    style() {
      const color = this.votes >= 500 ? '#71DBA8 ' : '#FFDD9B '
      return 'background: linear-gradient(90deg, ' + color + Math.min(this.votes/5, 100) + '%, #EFEFEF ' + Math.min(this.votes/5, 100) + '%);'
    },
    getImgUrl() {
      const images = require.context('@/assets/img/candidates/', false, /\.png$/)
      const image = registeredCandidates.includes(this.name.replace('  ', ' ')) ? images('./' + this.name.replace('  ', ' ').replace(/\s+/g, '_') + '.png') : images('./default.png')
      return image
    },
    getDestination() {
      const path = "/candidate/" + this.name.replace(/\s+/g, '_')
      return path
    }
  }
}

const registeredCandidates = ["MACRON Emmanuel", "PÉCRESSE Valérie", "HIDALGO Anne", "ROUSSEL Fabien", "LASSALLE Jean", "ARTHAUD Nathalie", "JADOT Yannick", "MÉLENCHON Jean-Luc", "DUPONT-AIGNAN Nicolas", "LE PEN Marine", "ZEMMOUR Éric", "ASSELINEAU François", "POUTOU Philippe", "KAZIB Anasse", "TAUBIRA Christiane", "THOUY Hélène", "KUZMANOVIC Georges", "KOENIG Gaspard", "EGGER Clara", "MIGUET Nicolas", "MARTINEZ Antoine", "CHICHE Arnaud", "SMATI Rafik", "BÉKAERT Corinne", "CAU Marie", "FORTANÉ Jean-Marc", "ROCCA Martin", "WAECHTER Antoine", "RIVOAL Stéphanie"]
</script>

<style scoped lang="scss">
.candidate {
  padding: 20px;
  border-radius: 13px;
  box-shadow: 0px 5px 100px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 15px;
  color: inherit;
  text-decoration: inherit;

  .profile {
    width: 60px;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 65%;

    p {
      font-size: 16px;
      display: flex;
      align-items: center;

      .checked {
        width: 15px;
        margin-right: 5px;
        margin-top: 5px;
      }
  
      span {
        font-family: sofia-pro, sans-serif;
        font-weight: 500;
        font-size: 14px;
        opacity: .5;
        margin-left: 5px;
        margin-top: 2px;
      }
    }
  
    .progress {
      width: 100%;
      height: 5px;
      border-radius: 10px;
      margin-top: 10px;
    }
  }

  .arrow {
    width: 20px;
  }
}
</style>
