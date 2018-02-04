<template>
  <form @submit.prevent="changeTodoName">
    <div class="form-group">
      <label for="todo-name">Digite o nome da lista...</label>
      <input
        type="text"
        name="todo-name"
        id="todo-name"
        class="todo-name"
        v-model="todoNameCopy"
        @blur="closeInput"
        placeholder="Digite o nome da lista..."
      >
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    todoListIndex: {
      type: Number,
      required: true,
    },
    todoName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      todoNameCopy: this.todoName,
      autofocus: false,
    };
  },
  methods: {
    ...mapActions('TodoLists', [
      'updateTodoTitle',
    ]),
    changeTodoName() {
      this.updateTodoTitle([this.todoListIndex, this.todoNameCopy]);
      this.closeInput();
    },
    closeInput() {
      this.$emit('canNotEdit');
      this.autofocus = false;
    },
  },
};

</script>

<style lang='scss' scoped>
  @import './EditTodoName.scss';
</style>
