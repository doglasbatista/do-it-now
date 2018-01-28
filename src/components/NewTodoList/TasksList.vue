<template>
  <ul class="tasks-list">
    <tasks-list-item />
    <tasks-list-item />
    <tasks-list-item />
  </ul>
</template>

<script>
import TasksListItem from './TasksListItem';

export default {
  name: 'TasksList',
  components: {
    TasksListItem,
  },
};

</script>

<style lang="scss" scoped>
  @import './tasks-list.scss'
</style>
