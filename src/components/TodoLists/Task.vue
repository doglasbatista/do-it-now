<template>
  <section class="task">
    <legend class="task__title">
      <input type="checkbox" name="task-name" id="task-name">
      <label for="task-name">{{task.title}}</label>
      <button class="destroy-task" @click.prevent="deleteTask"></button>
    </legend>
    <sub-tasks
      :subTasks='task.subTasks'
      :todoListIndex='todoListIndex'
      :taskIndex='taskIndex'
    />
    <new-sub-tasks
      :todoListIndex='todoListIndex'
      :taskIndex='taskIndex'
    />
  </section>
</template>

<script>
import { mapActions } from 'vuex';

import SubTasks from './SubTasks';
import NewSubTasks from './NewSubTasks';

export default {
  name: 'Task',
  props: {
    task: {
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
  },
  components: {
    SubTasks,
    NewSubTasks,
  },
  methods: {
    ...mapActions('TodoLists', [
      'removeTask',
    ]),
    deleteTask() {
      this.removeTask([this.todoListIndex, this.taskIndex]);
    },
  },
};

</script>

<style lang="scss" scoped>
  @import './task.scss'
</style>
