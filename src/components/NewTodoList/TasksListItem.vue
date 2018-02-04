<template>
  <li class="item">
    <input type="checkbox" name="task-name" id="task-name">
    <label for="task-name">{{todoList.title}}</label>
  </li>
</template>

<script>

export default {
  name: 'TasksListItem',
  props: {
    todoList: {
      type: Object,
      required: true,
    },
  },
};

</script>

<style lang="scss" scoped>
  @import './tasks-list.scss'
</style>
