<template>
  <div class="form-group">
    <label for="new-task">Adicionar tarefa</label>
    <input
      type="text"
      name="new-task"
      id="new-task"
      class="new-task"
      :value="task.title"
      @input="updateTask($event)"
      placeholder="Adicionar tarefa"
    >
  </div>
</template>

<script>

export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
    taskIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    updateTask(event) {
      this.$emit('updateTaskTitle', this.taskIndex, event.target.value);
    },
  },
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
