<template>
  <section class="sign-up">
    <div class="sign-up__content">
      <img class="logo" src="~@/assets/imgs/logo.png">
      <form class="card sign-up-form">
        <legend class="sign-up-form__title">Criar Conta</legend>

        <div class="form-group">
          <label for="name">Nome</label>
          <input type="text" class="no-radius-bottom" name="name" id="name" placeholder="Nome">
        </div>

        <div class="form-group">
          <label for="email">Endereco de e-mail</label>
          <input type="email" class="no-radius" name="email" id="email" placeholder="Endereco de e-mail">
        </div>

        <div class="form-group">
          <label for="password">Senha</label>
          <input type="password" class="not-radius-top" name="password" id="password" placeholder="Senha">
        </div>
      </form>
    </div>
  </section>
</template>

<script>

export default {

};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
