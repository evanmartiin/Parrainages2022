<template>
  <div class="candidates-list">
    <h1>Chiffres par candidat</h1>
    <Candidate :rank="1" name="Valérie PÉCRESSE" :votes="1249" :podium="true"/>
    <Candidate :rank="2" name="Emmanuel MACRON" :votes="1050" :podium="true"/>
    <Candidate :rank="3" name="Anne HIDALGO" :votes="876" :podium="true"/>
    <Candidate :rank="1" name="Valérie PÉCRESSE" :votes="1249" :podium="false"/>
    <Candidate :rank="2" name="Emmanuel MACRON" :votes="1050" :podium="false"/>
    <Candidate :rank="3" name="Anne HIDALGO" :votes="876" :podium="false"/>
  </div>
</template>

<script>
import Candidate from '@/components/home/Candidate.vue'

export default {
  components: { Candidate },
  name: 'CandidatesList'
}
</script>

<style scoped lang="scss">
h1 {
  margin-bottom: 35px;
}

.candidates-list {
  background-color: #ffffff;
  box-sizing: border-box;
  border: 5px solid #E1000F;
  width: 100%;
  padding: 35px;
  color: #000000;
}

.candidate.podium {
  margin-bottom: 35px;
}

.candidate.no-podium {
  padding-top: 25px;
  margin-top: 25px;
  position: relative;
}

.candidate.no-podium:after {
  content: "";
  position: absolute;
  top: 0;
  left: 30%;
  right: 30%;
  height: 1px;
  border-top: 1px solid #E1000F;
}
</style>
