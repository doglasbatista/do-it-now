<template>
  <li class="todo-item">
    <img class="list-icon" src="./imgs/list.png">
    <span class="todo-item__name">Lista 1</span>
    <div class="todo-item__control-box">
      <button class="todo-item__control-item">
        <img src="./imgs/edit.png">
      </button>
      <button class="todo-item__control-item">
        <img src="./imgs/delete-list.png">
      </button>
    </div>
    <tasks />
  </li>
</template>

<script>
import Tasks from './Tasks';

export default {
  name: 'TodoItem',
  components: {
    Tasks,
  },
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
