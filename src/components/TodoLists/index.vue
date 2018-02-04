<template>
  <section class="todo-lists">
    <application-menu />
    <div class="todo-lists-content">
      <legend class="todo-lists__title">Listas</legend>
      <button class="add-item"></button>
      <todo-list />
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

import ApplicationMenu from '@/components/shared/ApplicationMenu';

import TodoList from './List';

export default {
  name: 'TodoLists',
  components: {
    TodoList,
    ApplicationMenu,
  },
  async mounted() {
    await this.addEmptyTodoList();
  },
  methods: {
    ...mapActions('TodoLists', [
      'addEmptyTodoList',
    ]),
  },
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
