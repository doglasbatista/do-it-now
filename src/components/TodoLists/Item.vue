<template>
  <li class="todo-item">
    <div class="todo-item__indicator">
      <img class="list-icon" src="./imgs/list.png">
      <edit-todo-name
        :todoListIndex="todoListIndex"
        :todoName="todoList.title"
        @canNotEdit='toggleCanEdit'
        v-if="canEdit"
      />
      <span class="todo-item__name" v-else>{{todoList.title}}</span>
      <div class="todo-item__control-box">
        <button class="todo-item__control-item" @click.prevent="toggleCanEdit">
          <img src="./imgs/edit.png">
        </button>
        <button class="todo-item__control-item" @click.prevent="deleteTodoList">
          <img src="./imgs/delete-list.png">
        </button>
      </div>
    </div>
    <tasks
      :tasks='todoList.tasks'
      :todoListIndex='todoListIndex'
    />
  </li>
</template>

<script>
import { mapActions } from 'vuex';

import Tasks from './Tasks';
import EditTodoName from './EditTodoName';

export default {
  name: 'TodoItem',
  data: () => ({
    canEdit: false,
  }),
  props: {
    todoList: {
      type: Object,
      required: true,
    },
    todoListIndex: {
      type: Number,
      required: true,
    },
  },
  components: {
    Tasks,
    EditTodoName,
  },
  methods: {
    ...mapActions('TodoLists', [
      'removeTodoList',
    ]),
    deleteTodoList() {
      this.removeTodoList(this.todoListIndex);
    },
    toggleCanEdit() {
      this.canEdit = !this.canEdit;
    },
  },
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
