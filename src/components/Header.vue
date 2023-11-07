<template>
  <nav class="navbar navbar-expand-lg bg-secondary sticky-div" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ name: 'home' }">MOVIE-DB</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link active" aria-current="page" :to="{ name: 'home' }"
            >Домой</router-link
          >
          <a
            class="nav-link active"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            v-if="!isLoggedIn"
            >Вход / Регистрация</a
          >
          <template v-else>
            <router-link class="nav-link active" :to="{ name: 'manage' }">Мой рейтинг</router-link>
            <a class="nav-link active" href="#" @click.prevent="logout">Выйти</a>
          </template>
          <router-link class="nav-link active" :to="{ name: 'users' }">Пользователи</router-link>
          <router-link class="nav-link active" :to="{ name: 'about' }">О сайте</router-link>
        </div>
      </div>
    </div>
  </nav>
  <auth-modal />
</template>

<script>
import AuthModal from '@/components/Auth.vue'
import apiService from '@/includes/apiAuth'

export default {
  name: 'AppHeader',
  components: {
    AuthModal
  },
  data() {
    return {
      isLoggedIn: false
    }
  },
  mounted() {
    this.isLoggedIn = apiService.isLoggedIn()
  },
  methods: {
    async logout() {
      try {
        apiService.logoutUser()
        this.$router.push({ name: 'home' })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.sticky-div {
  position: sticky;
  top: 0;
  padding: 10px;
  z-index: 999;
  /* Additional styling */
}
</style>
