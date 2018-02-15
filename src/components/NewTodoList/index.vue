<template>
  <div class="new-todo-list">
    <application-menu />
    <div class="content">
      <back-button
        linkTo="TodoLists"
      />
      <section class="wrapper create-todolist">
        <legend class="create-todolist__title">Criar Lista</legend>
        <create-list />
      </section>
    </div>
  </div>
</template>

<script>
import ApplicationMenu from '@/components/shared/ApplicationMenu';
import BackButton from '@/components/shared/BackButton';

import CreateList from './CreateList';

export default {
  name: 'NewTodoList',
  components: {
    ApplicationMenu,
    CreateList,
    BackButton,
  },
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
