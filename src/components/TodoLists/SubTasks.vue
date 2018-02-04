<template>
  <ul class="sub-tasks">
    <sub-task
      v-for="(subTask, index) in subTasks"
      :key="index"
      :subTaskIndex="index"
      :subTask="subTask"
      :todoListIndex="todoListIndex"
      :taskIndex="taskIndex"
    />
  </ul>
</template>

<script>
import SubTask from './SubTask';

export default {
  name: 'SubTasks',
  props: {
    subTasks: {
      type: Array,
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
    SubTask,
  },
};

</script>

<style lang="scss" scoped>
  @import './sub-tasks.scss';
</style>
