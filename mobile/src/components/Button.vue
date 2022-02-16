<template>
  <div v-if="light" class="light-button">
    <img src="../assets/img/arrow.png" alt="">
  </div>
  <div v-else class="button">
    <button>
      <p>{{ title }}</p>
      <div><img src="../assets/img/arrow.png" alt=""></div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: String,
    light: Boolean
  }
}
</script>

<style scoped>
.button {
  display: inline-block;
  padding-bottom: 3px;
  padding-right: 3px;
  position: relative;
}

.button:before {
  content: "";
  position: absolute;
  top: 5px;
  bottom: 0;
  right: 0;
  width: 1px;
  border-right: 1px solid #E1000F;
}

.button:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 5px;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #E1000F;
}

button {
  background-color: #ffffff;
  color: #E1000F;
  border: 1px solid #E1000f;
  box-sizing: border-box;
  display: flex;
  padding: 0;
}

button p {
  font-family: "Marianne";
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  padding: 12px;
  margin: 0;
}

button div {
  background-color: #E1000F;
  width: 30px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

button div img {
  width: 20px;
  transform: rotateY(180deg);
}

button:active, button:focus {
  background-color: #E1000F;
  color: #ffffff;
}

.light-button {
  background-color: #E1000F;
  width: 30px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.light-button img {
  width: 20px;
  transform: rotateY(180deg);
}
</style>
