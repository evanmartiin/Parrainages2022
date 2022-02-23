<template>
  <div class="hero">
    <div class="details">
      <img :src="getImgUrl" alt="">
      <p class="rank">#{{ rank }}</p>
      <h1>{{ name }}</h1>
      <p class="party" v-if="party"><a :href="party.link" target="_blank">{{ party.party }}<img src="@/assets/img/external.png" alt=""></a></p>
    </div>

    <div class="votes">
      <div class="content">
        <p class="t1">{{ votes }}<span> / 500</span></p>
        <div class="progress" :style="style"></div>
        <p class="t2">parrainages recueillis</p>
      </div>
      <img v-if="validated" class="checked" src="@/assets/img/checked.png" alt="">
    </div>

    <div class="nav">
      <router-link :to="'/candidate/' + nav.prev.nom.replace(/\s+/g, '_')" class="prev" v-if="nav.prev">
        <div>
          <img class="arrow" src="@/assets/img/arrow-right.png" alt="">
          <img class="profile" :src="getPrevUrl" alt="">
        </div>
        <p>{{ nav.prev.nom }}</p>
      </router-link>
      <router-link :to="'/candidate/' + nav.next.nom.replace(/\s+/g, '_')" class="next" v-if="nav.next">
        <div>
          <img class="profile" :src="getNextUrl" alt="">
          <img class="arrow" src="@/assets/img/arrow-right.png" alt="">
        </div>
        <p>{{ nav.next.nom }}</p>
      </router-link>
    </div>

    <div class="nav-scrolled">
      <router-link :to="'/candidate/' + nav.prev.nom.replace(/\s+/g, '_')" class="prev" v-if="nav.prev">
        <div>
          <img class="arrow" src="@/assets/img/arrow-right.png" alt="">
          <img class="profile" :src="getPrevUrl" alt="">
        </div>
      </router-link>
      <router-link :to="'/candidate/' + nav.next.nom.replace(/\s+/g, '_')" class="next" v-if="nav.next">
        <div>
          <img class="profile" :src="getNextUrl" alt="">
          <img class="arrow" src="@/assets/img/arrow-right.png" alt="">
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    rank: Number,
    name: String,
    votes: Number,
    validated: Boolean,
    nav: Object,
    party: Object
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
    getPrevUrl() {
      const images = require.context('@/assets/img/candidates/', false, /\.png$/)
      const image = registeredCandidates.includes(this.nav.prev.nom) ? images('./' + this.nav.prev.nom.replace(/\s+/g, '_') + '.png') : images('./default.png')
      return image
    },
    getNextUrl() {
      const images = require.context('@/assets/img/candidates/', false, /\.png$/)
      const image = registeredCandidates.includes(this.nav.next.nom) ? images('./' + this.nav.next.nom.replace(/\s+/g, '_') + '.png') : images('./default.png')
      return image
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      var getElemDistance = function (elem) {
        var location = 0;
        if (elem.offsetParent) {
            do {
                location += elem.offsetTop;
                elem = elem.offsetParent;
            } while (elem);
        }
        return location >= 0 ? location : 0;
      };
      var elem = document.getElementsByClassName('nav')[0];
      var location = getElemDistance( elem );
      const distance = location - window.pageYOffset;
      
      document.getElementsByClassName('nav-scrolled')[0].style.display = distance <= 20 ? 'grid' : 'none';
    }
  }
}

const registeredCandidates = ["MACRON Emmanuel", "PÉCRESSE Valérie", "HIDALGO Anne", "ROUSSEL Fabien", "LASSALLE Jean", "ARTHAUD Nathalie", "JADOT Yannick", "MÉLENCHON Jean-Luc", "DUPONT-AIGNAN Nicolas", "LE PEN Marine", "ZEMMOUR Éric", "ASSELINEAU François", "POUTOU Philippe", "KAZIB Anasse", "TAUBIRA Christiane", "THOUY Hélène", "KUZMANOVIC Georges", "KOENIG Gaspard", "EGGER Clara", "MIGUET Nicolas", "MARTINEZ Antoine", "CHICHE Arnaud", "SMATI Rafik", "BÉKAERT Corinne", "CAU Marie", "FORTANÉ Jean-Marc", "ROCCA Martin", "WAECHTER Antoine", "RIVOAL Stéphanie"]
</script>

<style scoped lang="scss">
.hero {
  background-color: #ffffff;
  background-image: url('../../assets/img/bg.png');
  background-position: top center;
  background-size: contain;
  background-repeat: no-repeat;
  box-sizing: border-box;
  padding: 50px 20px 20px 20px;

  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-bottom: 50px;

    img {
      width: 150px;
      margin-bottom: 15px;
    }

    .rank {
      padding: 5px 15px;
      border-radius: 15px;
      background-color: #101046;
      color: #ffffff;
    }

    .party {
      color: #799CD0;

      img {
        width: 15px;
        margin-bottom: 0px;
        margin-left: 2px;
        opacity: .5;
      }
    }
  }

  .votes {
    border-radius: 13px;
    box-shadow: 0px 20px 100px rgba(0, 0, 0, 0.1);
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    gap: 30px;
    background-color: #ffffff;

    .content {
      width: 100%;

      .t1 {
        font-size: 40px;
        font-weight: 700;

        span {
          font-size: 20px;
          font-weight: 600;
          opacity: .5;
        }
      }

      .progress {
        width: 100%;
        height: 5px;
        border-radius: 10px;
        margin: 10px 0;
      }

      .t2 {
        font-size: 18px;
      }
    }

    .checked {
      width: 30px;
    }
  }

  .nav, .nav-scrolled {
    display: grid;
    grid-template-columns: 90px 1fr 90px;
    margin-top: 50px;

    .prev {
      grid-column: 1/2;
    }

    .next {
      grid-column: 3/4;
      align-items: flex-end;
    }

    .prev, .next {
      display: flex;
      flex-direction: column;

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 5px 10px;
        border: 1px solid #DBDBDB;
        border-radius: 50px;

        .arrow {
          width: 20px;
        }
        
        .profile {
          width: 40px;
        }
      }
      
      p {
        margin-top: 5px;
        width: 150%;
      }
    }

    .prev .arrow {
      transform: rotateZ(180deg);
    }

    .next p {
      text-align: right;
    }
  }

  .nav-scrolled {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(50px);
    display: none;

    .prev div, .next div {
      background-color: #ffffff;
      box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
