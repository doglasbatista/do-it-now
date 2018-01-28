<template>
  <section class="tasks">
    <new-task />
    <task />
  </section>
</template>

<script>
import Task from './Task';
import NewTask from './NewTask';

export default {
  name: 'Tasks',
  components: {
    Task,
    NewTask,
  },
};

</script>

