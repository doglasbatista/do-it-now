<template>
  <form @submit.prevent="createList">
    <div class="form-group">
      <label for="new-list">Digite o nome da lista...</label>
      <input
        type="text"
        name="new-list"
        id="new-list"
        class="new-list"
        v-model="todoList.title"
        v-validate="'required'"
        placeholder="Digite o nome da lista..."
      >
    </div>
    <div class="new-task-group">
      <task-title
        v-for="(task, index) in tasks"
        :key="index"
        :taskIndex="index"
        :task="task"
        @updateTaskTitle="updateTaskTitle"
      />
      <a class="new-task-icon" @click.prevent="addTask"></a>
    </div>

    <button class="btn-primary">Criar Lista</button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import TaskTitle from './TaskTitle';

export default {
  name: 'CreateList',
  data: () => ({
    todoList: {},
    tasks: [],
  }),
  components: {
    TaskTitle,
  },
  mounted() {
    this.resetCreateListada();
  },
  computed: {
    ...mapGetters('TodoLists', [
      'todoListStructure',
      'taskStructure',
    ]),
  },
  methods: {
    ...mapActions('TodoLists', [
      'addCompleteTodoList',
    ]),
    createList() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.todoList.tasks = JSON.parse(JSON.stringify(this.tasks));
          for (var i = 0; i < this.todoList.tasks.length; i++) {
            if (this.todoList.tasks[i].title === '') {
              delete this.todoList.tasks[i];
            }
          }
          this.addCompleteTodoList(this.todoList);
          this.resetCreateListada();
        } else {
          this.$notify({
            message: 'Verifique os dados do formulario',
            type: 'danger',
          });
          this.$validator.validateAll();
        }
      });
    },
    addTask() {
      this.tasks.push(JSON.parse(JSON.stringify(this.taskStructure)));
    },
    updateTaskTitle(taskIndex, newValue) {
      this.tasks[taskIndex].title = newValue;
    },
    resetCreateListada() {
      this.todoList = JSON.parse(JSON.stringify(this.todoListStructure));

      this.tasks.length = 0;
      this.addTask();
    },
  },
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
