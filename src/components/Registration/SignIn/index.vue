<template>
  <section class="sign-in">
    <background-pattern />
    <div class="sign-in__content">
      <img class="logo" src="~@/assets/imgs/logo.png">
      <back-button />
      <form class="card sign-in-form" @submit.prevent="login">
        <legend class="sign-in-form__title">Entrar</legend>

        <div class="form-group">
          <label for="name">Nome</label>
          <input
            type="text"
            class="no-radius-bottom"
            name="name"
            id="name"
            v-validate="'required|email'"
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
            v-validate="'required'"
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
import BackgroundPattern from '@/components/shared/BackgroundPattern';
import BackButton from '@/components/shared/BackButton';

export default {
  name: 'SignIn',
  components: {
    BackgroundPattern,
    BackButton,
  },
  methods: {
    login() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$router.push({ name: 'TodoLists' });
        } else {
          this.$notify({
            message: 'Verifique os dados informados',
            type: 'danger',
          });
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
