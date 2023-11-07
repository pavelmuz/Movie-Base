<template>
  <vee-form class="register-form" :validation-schema="registerSchema" @submit="register">
    <div class="alert" :class="regAlertClass" role="alert" v-if="regShowAlert">
      {{ regAlertMsg }}
    </div>
    <div class="mb-3">
      <label class="form-label">Имя Пользователя</label>
      <vee-field type="text" class="form-control" name="name" />
      <ErrorMessage name="name" class="text-danger" />
    </div>
    <div class="mb-3">
      <label class="form-label">Email</label>
      <vee-field type="email" class="form-control" name="email" />
      <ErrorMessage name="email" class="text-danger" />
    </div>
    <div class="mb-3">
      <label class="form-label">Пароль</label>
      <vee-field name="password" :bails="false" v-slot="{ field, errors }">
        <input type="password" class="form-control" v-bind="field" />
        <div v-for="error in errors" :key="error" class="text-danger">
          {{ error }}
        </div>
      </vee-field>
    </div>
    <div class="mb-3">
      <label class="form-label">Подтверждение пароля</label>
      <vee-field type="password" class="form-control" name="confirm_password" />
      <ErrorMessage name="confirm_password" class="text-danger" />
    </div>
    <button type="submit" class="btn btn-success">Зарегистрироваться</button>
  </vee-form>
</template>

<script>
import apiService from '@/includes/apiAuth'
import { ErrorMessage } from 'vee-validate'

export default {
  name: 'RegisterForm',
  data() {
    return {
      registerSchema: {
        name: 'required|min:3|max:15',
        email: 'required|email',
        password: 'required|min:6|max:15|excluded:password',
        confirm_password: 'passwords_match:@password'
      },
      regShowAlert: false,
      regAlertMsg: 'Подождите, идет регистрация',
      regAlertClass: 'alert-info'
    }
  },
  components: { ErrorMessage },
  methods: {
    async register(values) {
      console.log(values)
      this.regShowAlert = true
      this.regAlertClass = 'alert-info'
      this.regAlertMsg = 'Подождите, идет регистрация'
      try {
        await apiService.registerUser({
          name: values.name,
          email: values.email,
          password: values.password
        })
        this.regAlertClass = 'alert-success'
        this.regAlertMsg = 'Регистрация завершена, вход успешно выполнен'
        setTimeout(() => {
          window.location.reload()
        }, 1000)
        this.$router.push({ name: 'manage' })
      } catch (error) {
        console.log(error)
        this.regAlertClass = 'alert-danger'
        this.regAlertMsg = error
      }
    }
  }
}
</script>

<style scoped>
.btn-success {
  width: 100%;
}
.register-form {
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
