<template>
  <div class="departments">
    <div class="top">
      <h1>Top départements</h1>
      <div class="podium">
        <div v-for="(dep, index) in sortedDeps.slice(0, 3)" class="el" :key="dep.nom">
          <img v-if="index === 0" src="@/assets/img/first-place.png" alt="">
          <img v-else-if="index === 1" src="@/assets/img/second-place.png" alt="">
          <img v-else src="@/assets/img/third-place.png" alt="">
          <div class="content">
            <h2>{{ dep.nom }}</h2>
            <p>{{ dep.total }} parrainage{{ dep.total > 1 ? "s" : "" }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  name: 'Departments',
  props: {
    deps: Object
  },
  setup(props) {
    const sortedDeps = ref(null);

    sortedDeps.value = [...props.deps].sort((a, b) => b.total - a.total)
    
    return {
      sortedDeps
    }
  }
}
</script>

<style scoped lang="scss">
.departments {
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  margin-top: 50px;
  color: #000000;
}

.top {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.podium {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
}

.el {
  display: flex;
  gap: 5px;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
  }

  .content {
    text-align: left;
  }
}

h1 {
  margin-bottom: 20px;
}
</style>
