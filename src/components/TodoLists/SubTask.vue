<template>
  <li class="sub-task">
    <input type="checkbox" name="subtask-name" id="subtask-name">
    <label for="subtask-name">{{subTask.title}}</label>
    <button class="destroy-task"></button>
  </li>
</template>

<script>

export default {
  props: {
    subTask: {
      type: Object,
      required: true,
    },
  },
};

</script>

<style lang="scss" scoped>
  @import './sub-tasks.scss';
</style>
