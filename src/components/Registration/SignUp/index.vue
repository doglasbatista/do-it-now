<template>
  <section class="sign-up">
    <background-pattern />
    <div class="sign-up__content">
      <img class="logo" src="~@/assets/imgs/logo.png">
      <back-button />
      <form class="card sign-up-form" @submit.prevent="registerUser">
        <legend class="sign-up-form__title">Criar Conta</legend>

        <div class="form-group">
          <label for="name">Nome</label>
          <input
            type="text"
            class="no-radius-bottom"
            name="name"
            id="name"
            v-validate="'required'"
            placeholder="Nome"
          >
        </div>

        <div class="form-group">
          <label for="email">Endereco de e-mail</label>
          <input
            type="email"
            class="no-radius"
            name="email"
            id="email"
            v-validate="'required|email'"
            placeholder="Endereco de e-mail"
          >
        </div>

        <div class="form-group">
          <label for="password">Senha</label>
          <input
            type="password"
            class="not-radius-top"
            name="password"
            id="password"
            v-validate="'required'"
            placeholder="Senha"
          >
        </div>

        <div class="form-group">
          <button class="btn-primary" type="submit">Criar Conta</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import BackgroundPattern from '@/components/shared/BackgroundPattern';
import BackButton from '@/components/shared/BackButton';

export default {
  name: 'SignUp',
  components: {
    BackgroundPattern,
    BackButton,
  },
  methods: {
    registerUser() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$router.push({ name: 'TodoLists' });
        } else {
          this.$validator.validateAll();
        }
      });
    },
  },
};

</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
