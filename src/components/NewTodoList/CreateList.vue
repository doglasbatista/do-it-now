<template>
  <form>
    <div class="form-group">
      <label for="new-list">Digite o nome da lista...</label>
      <input
        type="text"
        name="new-list"
        id="new-list"
        class="new-list"
        placeholder="Digite o nome da lista..."
      >
    </div>
  </form>
</template>

<script>

export default {
  name: 'CreateList',
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
