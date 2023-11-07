<template>
  <div class="movie-cards">
    <h4>Рейтинг пользователя: {{ $route.params.name }}</h4>
  </div>
  <div v-for="movie in moviesFound" :key="movie" class="movie-cards">
    <div class="card mb-3" style="max-width: 800px">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="movie.poster" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ movie.name }}</h5>
            <h6>Рейтинг: {{ movie.rating }}</h6>
            <p class="card-text">
              {{ movie.descr }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button
    type="button"
    class="btn btn-secondary back-button"
    @click.prevent="$router.push({ name: 'users' })"
  >
    Назад
  </button>
</template>

<script>
import apiMoviesDB from '@/includes/apiMoviesDB'

export default {
  name: 'UsersRating',
  data() {
    return {
      moviesFound: {}
    }
  },
  async mounted() {
    try {
      const userId = this.$route.params.id
      this.moviesFound = await apiMoviesDB.findMovies('userId', userId)
      this.moviesFound.sort((a, b) => b.rating - a.rating)
    } catch (error) {
      console.error('Error:', error.message)
    }
  }
}
</script>

<style scoped>
.movie-cards {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
}
.back-button {
  display: block;
  margin: 1rem auto 2rem auto;
  width: 20%;
}
</style>
