<template>
  <section class="wrapper create-todolist">
    <legend class="create-todolist__title">Criar Lista</legend>
    <create-list />
    <create-task />
    <tasks-list />
    <button class="btn-primary">Criar Lista</button>
  </section>
</template>

<script>
import CreateList from './CreateList';
import CreateTask from './CreateTask';
import TasksList from './TasksList';

export default {
  name: 'NewTodoList',
  components: {
    CreateList,
    CreateTask,
    TasksList,
  },
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
