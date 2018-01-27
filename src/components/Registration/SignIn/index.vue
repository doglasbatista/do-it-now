<template>
  <section class="sign-in">
    <div class="sign-in__content">
      <img class="logo" src="~@/assets/imgs/logo.png">
      <form class="card sign-in-form">
        <legend class="sign-in-form__title">Entrar</legend>

        <div class="form-group">
          <label for="name">Nome</label>
          <input
            type="text"
            class="no-radius-bottom"
            name="name"
            id="name"
            placeholder="Nome"
          >
        </div>

        <div class="form-group">
          <label for="password">Senha</label>
          <input
            type="password"
            class="not-radius-top"
            name="password"
            id="password"
            placeholder="Senha"
          >
        </div>

        <div class="form-group">
          <button class="btn-secondary" type="submit">Entrar</button>
        </div>

        <div class="form-group">
          <a class="forgot-your-password">Esqueceu a Senha?</a>
        </div>
      </form>
    </div>
  </section>
</template>

<script>

export default {
  name: 'SignIn',
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
