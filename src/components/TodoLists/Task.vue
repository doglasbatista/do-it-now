<template>
  <section class="task">
    <legend class="task__title">
      <input type="checkbox" name="task-name" id="task-name">
      <label for="task-name">Tarefa 1</label>
      <button class="destroy-task"></button>
    </legend>
    <sub-tasks />
    <new-sub-tasks />
  </section>
</template>

<script>
import SubTasks from './SubTasks';
import NewSubTasks from './NewSubTasks';

export default {
  name: 'Task',
  components: {
    SubTasks,
    NewSubTasks,
  },
};

</script>

<style lang="scss" scoped>
  @import './task.scss'
</style>
