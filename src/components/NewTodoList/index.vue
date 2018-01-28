<template>
  <div>
    <todo-menu />
    <section class="wrapper create-todolist">
      <legend class="create-todolist__title">Criar Lista</legend>
      <create-list />
      <create-task />
      <tasks-list />
      <button class="btn-primary">Criar Lista</button>
    </section>
  </div>
</template>

<script>
import TodoMenu from '@/components/shared/Menu';

import CreateList from './CreateList';
import CreateTask from './CreateTask';
import TasksList from './TasksList';

export default {
  name: 'NewTodoList',
  components: {
    TodoMenu,
    CreateList,
    CreateTask,
    TasksList,
  },
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
