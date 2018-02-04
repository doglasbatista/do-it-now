<template>
  <form @submit.prevent="createList">
    <div class="form-group">
      <label for="new-list">Digite o nome da lista...</label>
      <input
        type="text"
        name="new-list"
        id="new-list"
        class="new-list"
        v-model="listTitle"
        placeholder="Digite o nome da lista..."
      >
    </div>
    <div class="form-group">
      <label for="new-task">Adicionar tarefa</label>
      <input
        type="text"
        name="new-task"
        id="new-task"
        class="new-task"
        v-model="taskTitle"
        placeholder="Adicionar tarefa"
      >
    </div>

    <button class="btn-primary">Criar Lista</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CreateList',
  data: () => ({
    listTitle: '',
    taskTitle: '',
  }),
  methods: {
    ...mapActions('TodoLists', [
      'addListWithTask',
    ]),
    createList() {
      this.addListWithTask([this.listTitle, this.taskTitle]);
      this.$router.push({ name: 'TodoLists' });
    },
  },
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
