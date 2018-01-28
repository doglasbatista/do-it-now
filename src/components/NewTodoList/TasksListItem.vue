<template>
  <li class="item">
    <input type="checkbox" name="task-name" id="task-name">
    <label for="task-name">Tarefa 1</label>
  </li>
</template>

<script>

export default {
  name: 'TasksListItem',
};

</script>

<style lang="scss" scoped>
  @import './tasks-list.scss'
</style>
