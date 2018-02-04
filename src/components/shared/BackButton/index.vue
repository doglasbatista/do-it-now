<template>
  <router-link class="back-button" :to="{ name: linkTo }" tag="button">
    <img src="./imgs/back-arrow.png">
  </router-link>
</template>

<script>

export default {
  name: 'BackButton',
  props: {
    linkTo: {
      type: String,
      default: 'Home',
    },
  },
};

</script>

<style lang="scss" scoped>
  @import "./main.scss";
</style>
