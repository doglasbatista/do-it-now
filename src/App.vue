<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  async mounted() {
    await this.initialPayload();
  },
  methods: {
    ...mapActions('TodoLists', [
      'initialPayload',
    ]),
  },
};
</script>

<style lang="scss">
  @import '~@/assets/stylesheets/main.scss'
</style>
