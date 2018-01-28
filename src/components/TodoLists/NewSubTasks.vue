<template>
  <div class="form-group">
    <label for="new-subtask">Adicionar subtarefa</label>
    <input type="text" name="new-subtask" id="new-subtask" class="new-subtask" placeholder="Adicionar subtarefa">
  </div>
</template>

<script>

export default {
  name: 'NewSubTasks',
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
  @import './new-subtask.scss';
</style>
