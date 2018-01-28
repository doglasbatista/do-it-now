<template>
  <ul class="sub-tasks">
    <li class="sub-task">
      <input type="checkbox" name="subtask-name" id="subtask-name">
      <label for="subtask-name">Tarefa 1</label>
      <button class="destroy-task"></button>
    </li>
    <li class="sub-task">
      <input type="checkbox" name="subtask-name" id="subtask-name">
      <label for="subtask-name">Tarefa 1</label>
      <button class="destroy-task"></button>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'SubTasks',
};

</script>

<style lang="scss" scoped>
  @import './sub-tasks.scss';
</style>
