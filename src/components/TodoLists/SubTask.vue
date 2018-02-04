<template>
  <li class="sub-task">
    <input type="checkbox" name="subtask-name" id="subtask-name">
    <label for="subtask-name">{{subTask.title}}</label>
    <button class="destroy-task" @click.prevent="deleteSubtask"></button>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    subTask: {
      type: Object,
      required: true,
    },
    todoListIndex: {
      type: Number,
      required: true,
    },
    taskIndex: {
      type: Number,
      required: true,
    },
    subTaskIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapActions('TodoLists', [
      'removeSubTask',
    ]),
    deleteSubtask() {
      this.removeSubTask([this.todoListIndex, this.taskIndex, this.subTaskIndex]);
    },
  },
};

</script>

<style lang="scss" scoped>
  @import './sub-tasks.scss';
</style>
