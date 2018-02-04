<template>
  <div class="form-group">
    <label for="new-subtask">Adicionar subtarefa</label>
    <input
      type="text"
      name="new-subtask"
      id="new-subtask"
      class="new-subtask"
      placeholder="Adicionar subtarefa"
      v-model="subTaskTitle"
      @keyup.enter="createSubTask"
    >
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'NewSubTasks',
  props: {
    todoListIndex: {
      type: Number,
      required: true,
    },
    taskIndex: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    subTaskTitle: '',
  }),
  methods: {
    ...mapActions('TodoLists', [
      'addSubTask',
    ]),
    createSubTask() {
      this.addSubTask([this.todoListIndex, this.taskIndex, this.subTaskTitle]);
      this.subTaskTitle = '';
    },
  },
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
  @import './new-subtask.scss';
</style>
