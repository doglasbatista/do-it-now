<template>
  <router-link class="back-button" :to="{ name: 'Home' }" tag="button">
    <img src="./imgs/back-arrow.png">
  </router-link>
</template>

<script>

export default {
  name: 'BackButton',
};

</script>

<style lang="scss" scoped>
  @import "./main.scss";
</style>
