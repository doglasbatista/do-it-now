<template>
  <header class="header">
    <div class="wrapper">
      <h1>
        <router-link class="home" to="/">
          do <span></span> it <span></span> now
        </router-link>
      </h1>
      <user />
    </div>
  </header>
</template>

<script>
import User from './User';

export default {
  name: 'Menu',
  components: {
    User,
  },
};

</script>

<style lang="scss" scoped>
  @import './main.scss'
</style>
