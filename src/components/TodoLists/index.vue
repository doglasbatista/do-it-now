<template>
  <section class="todo-lists">
    <div class="todo-lists-content">
      <legend class="todo-lists__title">Listas</legend>
      <button class="add-item"></button>
      <todo-list />
    </div>
  </section>
</template>

<script>
import TodoList from './List';

export default {
  name: 'TodoLists',
  components: {
    TodoList,
  },
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
