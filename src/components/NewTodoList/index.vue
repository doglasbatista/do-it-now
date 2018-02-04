<template>
  <div>
    <application-menu />
    <section class="wrapper create-todolist">
      <legend class="create-todolist__title">Criar Lista</legend>
      <create-list />
      <tasks-list />
    </section>
  </div>
</template>

<script>
import ApplicationMenu from '@/components/shared/ApplicationMenu';

import CreateList from './CreateList';
import TasksList from './TasksList';

export default {
  name: 'NewTodoList',
  components: {
    ApplicationMenu,
    CreateList,
    TasksList,
  },
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
