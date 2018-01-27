<template>
  <section class="home-section">
    <div class="home-section__container">
      <img src="./imgs/img_responsive.png">
      <img class="logo" src="~@/assets/imgs/logo.png">
      <div class="navigation-container">
        <router-link class="btn-primary" to="/foo" tag="button">Criar Conta</router-link>
        <router-link class="btn-secondary" to="/foo" tag="button">Entrar</router-link>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Home',
};

</script>

<style lang="scss" scoped>
 @import './main.scss';
</style>

