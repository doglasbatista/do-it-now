<template>
  <section class="task">
    <legend class="task__title">
      <input type="checkbox" name="task-name" id="task-name">
      <label for="task-name">{{task.title}}</label>
      <button class="destroy-task"></button>
    </legend>
    <sub-tasks
      :subTasks="task.subTasks"
    />
    <new-sub-tasks />
  </section>
</template>

<script>
import SubTasks from './SubTasks';
import NewSubTasks from './NewSubTasks';

export default {
  name: 'Task',
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  components: {
    SubTasks,
    NewSubTasks,
  },
};

</script>

<style lang="scss" scoped>
  @import './task.scss'
</style>
