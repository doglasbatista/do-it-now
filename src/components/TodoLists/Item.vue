<template>
  <li class="todo-item">
    <img src="./imgs/list.png">
    <span class="todo-item__name">Lista 1</span>
    <div class="todo-item__control-box">
      <button class="todo-item__control-item">
        <img src="./imgs/edit.png">
      </button>
      <button class="todo-item__control-item">
        <img src="./imgs/delete-list.png">
      </button>
    </div>
  </li>
</template>

<script>

export default {
  name: 'TodoItem',
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>