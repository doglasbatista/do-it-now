<template>
  <section class="todo-lists">
    <application-menu />
    <div class="todo-lists-content">
      <legend class="todo-lists__title">Listas</legend>
      <router-link class="add-item" :to="{ name: 'NewTodoList' }" tag="button"></router-link>
      <todo-list />
    </div>
  </section>
</template>

<script>
import ApplicationMenu from '@/components/shared/ApplicationMenu';

import TodoList from './List';

export default {
  name: 'TodoLists',
  components: {
    TodoList,
    ApplicationMenu,
  },
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
