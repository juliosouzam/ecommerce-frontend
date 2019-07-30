<template id="bs-modal">
  <div
    class="modal fade"
    id="authModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ loginMode ? 'Login' : 'Cadastro' }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="loginMode ? submitLogin() : submitRegister()">
          <div class="modal-body">
            <div class="row" v-if="!loginMode">
              <div class="col-12">
                <label for>Nome:</label>
                <input type="text" name="name" v-model="form.name" class="form-control" />
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <label for>E-mail:</label>
                <input type="email" name="email" v-model="form.email" class="form-control" />
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <label for>Senha:</label>
                <input type="password" name="password" v-model="form.password" class="form-control" />
              </div>
            </div>
            <div class="row" v-if="!loginMode">
              <div class="col-12">
                <label for>Confirmar senha:</label>
                <input
                  type="password"
                  name="password_confirmation"
                  v-model="form.password_confirmation"
                  class="form-control"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12" v-if="loginMode">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    name="remember"
                    class="custom-control-input"
                    id="customCheck1"
                  />
                  <label class="custom-control-label" for="customCheck1">Manter conectado</label>
                </div>
              </div>
              <div class="col-12 mt-3 text-center">
                <a href="#" @click="changeMode" v-if="loginMode">Não tem conta, clique aqui!</a>
                <a href="#" @click="changeMode" v-else>Já tem conta, logue-se</a>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
            <button type="submit" class="btn btn-success" :disabled="loading">
              <span
                v-if="loading"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              {{ loginMode ? 'Entrar' : 'Cadastrar' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "./../services/api";

export default {
  data() {
    return {
      form: {
        name: "Júlio César",
        email: "julio@mail.com",
        password: "qwer1234",
        password_confirmation: "qwer1234"
      },
      loading: false,
      loginMode: true
    };
  },
  methods: {
    changeMode() {
      this.loginMode = !this.loginMode;
    },
    submitLogin() {
      this.loading = !this.loading;
      axios
        .post(`/auth/login`, this.form)
        .then(response => {
          this.loginMode = true;
          this.$toasted.show(response.data.message, {
            type: "success",
            icon: "fa-check",
            theme: "outline",
            position: "top-right",
            duration: 5000,
            action: {
              text: "Okay",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            }
          });
        })
        .catch(err => {
          this.$toasted.show(err.response.data, {
            type: "error",
            icon: "fa-times-circle",
            theme: "outline",
            position: "top-right",
            duration: 5000,
            action: {
              text: "Okay",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            }
          });
        })
        .finally(() => {
          this.loading = !this.loading;
        });
    },
    submitRegister() {
      this.loading = !this.loading;
      axios
        .post(`/auth/register`, this.form)
        .then(response => {
          this.loginMode = true;
          this.$toasted.show(response.data.message, {
            type: "success",
            icon: "fa-check",
            theme: "outline",
            position: "top-right",
            duration: 5000,
            action: {
              text: "Okay",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            }
          });
        })
        .catch(err => {
          this.$toasted.show(err.response.data, {
            type: "error",
            icon: "fa-times-circle",
            theme: "outline",
            position: "top-right",
            duration: 5000,
            action: {
              text: "Okay",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            }
          });
        })
        .finally(() => {
          this.loading = !this.loading;
        });
    }
  }
};
</script>