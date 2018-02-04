<template>
  <section class="tasks">
    <new-task
      :todoListIndex='todoListIndex'
    />
    <task
      v-for="(task, index) in tasks"
      :todoListIndex='todoListIndex'
      :key='index'
      :taskIndex='index'
      :task='task'
    />
  </section>
</template>

<script>
import Task from './Task';
import NewTask from './NewTask';

export default {
  name: 'Tasks',
  props: {
    tasks: {
      type: Array,
      required: true,
    },
    todoListIndex: {
      type: Number,
      required: true,
    },
  },
  components: {
    Task,
    NewTask,
  },
};

</script>

