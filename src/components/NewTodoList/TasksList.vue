<template>
  <ul class="tasks-list">
    <tasks-list-item
      v-for="(todoList, index) in todoLists"
      :key="index"
      :todoListIndex="index"
      :todoList="todoList"
    />
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

import TasksListItem from './TasksListItem';

export default {
  name: 'TasksList',
  components: {
    TasksListItem,
  },
  computed: {
    ...mapGetters('TodoLists', [
      'todoLists',
    ]),
  },
};

</script>

<style lang="scss" scoped>
  @import './tasks-list.scss'
</style>
