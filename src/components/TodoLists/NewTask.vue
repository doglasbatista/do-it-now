<template>
  <div class="form-group">
    <label for="new-task">Adicionar tarefa</label>
    <input
      type="text"
      name="new-task"
      id="new-task"
      class="new-task"
      placeholder="Adicionar tarefa"
    >
  </div>
</template>

<script>

export default {
  name: 'NewTask',
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
