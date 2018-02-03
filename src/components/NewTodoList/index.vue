<template>
  <div>
    <application-menu />
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
import ApplicationMenu from '@/components/shared/ApplicationMenu';

import CreateList from './CreateList';
import CreateTask from './CreateTask';
import TasksList from './TasksList';

export default {
  name: 'NewTodoList',
  components: {
    ApplicationMenu,
    CreateList,
    CreateTask,
    TasksList,
  },
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
