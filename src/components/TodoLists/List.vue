<template>
  <ul class="todo-list">
    <todo-item />
  </ul>
</template>

<script>
import TodoItem from './Item';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
