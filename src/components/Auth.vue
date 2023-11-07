<template>
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Мой аккаунт</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- Toggle form buttons -->
          <div class="container text-center modal-btns">
            <div class="row">
              <div class="col">
                <button
                  type="button"
                  class="btn btn-toggle"
                  :class="btnLogin"
                  @click="tabToggle = 'login'"
                >
                  Вход
                </button>
              </div>
              <div class="col">
                <button
                  type="button"
                  class="btn btn-toggle"
                  :class="btnRegister"
                  @click.prevent="tabToggle = 'register'"
                >
                  Регистрация
                </button>
              </div>
            </div>
          </div>
          <!-- Login Form -->
          <login-form v-if="tabToggle === 'login'" />
          <!-- Register Form  -->
          <register-form v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import RegisterForm from '@/components/RegisterForm.vue'

export default {
  name: 'Auth',
  components: {
    LoginForm,
    RegisterForm
  },
  data() {
    return {
      tabToggle: 'login'
    }
  },
  computed: {
    btnLogin() {
      if (this.tabToggle === 'login') {
        return ['btn-primary']
      } else {
        return ['btn-outline-primary']
      }
    },
    btnRegister() {
      if (this.tabToggle === 'login') {
        return ['btn-outline-primary']
      } else {
        return ['btn-primary']
      }
    }
  }
}
</script>

<style scoped>
.btn-toggle {
  width: 100%;
}
.modal-btns {
  padding: 0 1rem 1rem 1rem;
}
</style>
