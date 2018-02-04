<template>
  <ul class="todo-list">
    <todo-item
      v-for="(todoList, index) in todoLists"
      :key='index'
      :todoList='todoList'
    />
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

import TodoItem from './Item';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  computed: {
    ...mapGetters('TodoLists', [
      'todoLists',
    ]),
  },
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
