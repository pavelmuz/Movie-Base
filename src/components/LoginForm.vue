<template>
  <vee-form class="login-form" :validation-schema="loginSchema" @submit="login">
    <div class="alert" :class="loginAlertClass" role="alert" v-if="loginShowAlert">
      {{ loginAlertMsg }}
    </div>
    <div class="mb-3">
      <label class="form-label">Email</label>
      <vee-field type="email" class="form-control" name="email" />
      <ErrorMessage name="email" class="text-danger" />
    </div>
    <div class="mb-3">
      <label class="form-label">Пароль</label>
      <vee-field type="password" class="form-control" name="password" />
      <ErrorMessage name="password" class="text-danger" />
    </div>
    <button type="submit" class="btn btn-success">Войти</button>
  </vee-form>
</template>

<script>
import apiService from '@/includes/apiAuth'
import { ErrorMessage } from 'vee-validate'

export default {
  name: 'Login Form',
  data() {
    return {
      loginSchema: {
        email: 'required|email',
        password: 'required|min:6|max:15'
      },
      loginShowAlert: false,
      loginAlertMsg: 'Подождите, идет авторизация',
      loginAlertClass: 'alert-info'
    }
  },
  components: { ErrorMessage },
  methods: {
    async login(values) {
      console.log(values)
      this.loginShowAlert = true
      this.loginAlertClass = 'alert-info'
      this.loginAlertMsg = 'Подождите, идет авторизация'
      try {
        await apiService.loginUser({
          email: values.email,
          password: values.password
        })
        this.loginAlertClass = 'alert-success'
        this.loginAlertMsg = 'Вход успешно выполнен'
        setTimeout(() => {
          window.location.reload()
        }, 500)
        this.$router.push({ name: 'manage' })
      } catch (error) {
        console.log(error)
        this.loginAlertClass = 'alert-danger'
        this.loginAlertMsg = error
      }
    }
  }
}
</script>

<style scoped>
.login-form {
  padding-left: 1rem;
  padding-right: 1rem;
}
.btn-success {
  width: 100%;
}
</style>
