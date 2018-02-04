<template>
  <div class="form-group">
    <label for="new-task">Adicionar tarefa</label>
    <input
      type="text"
      name="new-task"
      id="new-task"
      class="new-task"
      placeholder="Adicionar tarefa"
      v-model="taskTitle"
      @keyup.enter='createTask'
    >
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'NewTask',
  props: {
    todoListIndex: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    taskTitle: '',
  }),
  methods: {
    ...mapActions('TodoLists', [
      'addTask',
    ]),
    createTask() {
      this.addTask([this.todoListIndex, this.taskTitle]);
    },
  },
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
