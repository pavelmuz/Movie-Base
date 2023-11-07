<template>
  <form class="rating-form">
    <div class="mb-3">
      <h5 style="margin-bottom: 3%">Новый рейтинг:</h5>
      <input type="text" class="form-control" v-model="newRating" style="width: 500px" />
      <button
        class="btn btn-secondary"
        style="margin-top: 1rem; margin-right: 2%; width: 20%"
        @click.prevent="$router.push({ name: 'manage' })"
      >
        Назад
      </button>
      <button class="btn btn-primary" @click.prevent="update" style="margin-top: 1rem; width: 20%">
        Обновить
      </button>
    </div>
    <div></div>
  </form>
</template>

<script>
import apiMoviesDB from '@/includes/apiMoviesDB'

export default {
  name: 'UpdateRating',
  data() {
    return {
      newRating: ''
    }
  },
  methods: {
    async update() {
      try {
        await apiMoviesDB.updateRating(this.$route.params.id, parseFloat(this.newRating))
        this.$router.push({ name: 'manage' })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.rating-form {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  width: auto;
}
</style>
