<template>
  <section class="tasks">
    <div class="form-group">
      <label for="new-task">Adicionar tarefa</label>
      <input
        type="text"
        name="new-task"
        id="new-task"
        class="new-task"
        placeholder="Adicionar tarefa"
      >
    </div>
    <task />
  </section>
</template>

<script>
import Task from './Task';

export default {
  name: 'Tasks',
  components: {
    Task,
  },
};

</script>

<style lang="scss" scoped>
  @import './tasks.scss';
</style>
