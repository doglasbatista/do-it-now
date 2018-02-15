<template>
  <li class="sub-task">
    <input
      type="checkbox"
      :name="inputIdentifier"
      :id="inputIdentifier"
      :checked="subTask.done"
      @click="changeSubTaskStatus"
    >
    <label :for="inputIdentifier">{{subTask.title}}</label>
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
  computed: {
    inputIdentifier() {
      return `subtask-${this.todoListIndex}${this.taskIndex}${this.subTaskIndex}-name`;
    },
  },
  methods: {
    ...mapActions('TodoLists', [
      'removeSubTask',
      'toggleSubTaskStatus',
    ]),
    deleteSubtask() {
      this.removeSubTask([this.todoListIndex, this.taskIndex, this.subTaskIndex]);
    },
    changeSubTaskStatus() {
      this.toggleSubTaskStatus([this.todoListIndex, this.taskIndex, this.subTaskIndex]);
    },
  },
};

</script>

<style lang="scss" scoped>
  @import './sub-tasks.scss';
</style>
