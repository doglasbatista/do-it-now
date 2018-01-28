<template>
  <section class="task">
    <legend class="task__title">
      <input type="checkbox" name="task-name" id="task-name">
      <label for="task-name">Tarefa 1</label>
      <button class="destroy-task"></button>
    </legend>
  </section>
</template>

<script>

export default {
  name: 'Task',
};

</script>

<style lang="scss" scoped>
  @import './task.scss'
</style>
