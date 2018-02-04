<template>
  <li class="todo-item">
    <div class="todo-item__indicator">
      <img class="list-icon" src="./imgs/list.png">
      <span class="todo-item__name">{{todoList.title}}</span>
      <div class="todo-item__control-box">
        <button class="todo-item__control-item">
          <img src="./imgs/edit.png">
        </button>
        <button class="todo-item__control-item">
          <img src="./imgs/delete-list.png">
        </button>
      </div>
    </div>
    <tasks
      :tasks='todoList.tasks'
    />
  </li>
</template>

<script>
import Tasks from './Tasks';

export default {
  name: 'TodoItem',
  props: {
    todoList: {
      type: Object,
      required: true,
    },
  },
  components: {
    Tasks,
  },
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
