<template>
  <form class="rating-form">
    <div class="mb-3">
      <h4>{{ movieData.nameRu }}</h4>
      <h5 style="margin-bottom: 3%">Ваш рейтинг:</h5>
      <input type="text" class="form-control" v-model="movieRating" style="width: 500px" />
      <button
        class="btn btn-secondary"
        style="margin-top: 1rem; margin-right: 2%; width: 20%"
        @click.prevent="$router.push({ name: 'search-result' })"
      >
        Назад
      </button>
      <button
        class="btn btn-primary"
        @click.prevent="addToDB"
        style="margin-top: 1rem; margin-right: 2%; width: 20%"
      >
        Добавить
      </button>
    </div>
  </form>
</template>

<script>
import apiMovies from '@/includes/apiMovies'
import apiMoviesDB from '@/includes/apiMoviesDB'

export default {
  name: 'SearchEdit',
  data() {
    return {
      movieData: {},
      movieRating: ''
    }
  },
  async mounted() {
    try {
      this.movieData = await apiMovies.getMovie(this.$route.params.id)
      console.log(this.movieData)
    } catch (error) {
      console.error('Error:', error.message)
    }
  },
  methods: {
    async addToDB() {
      try {
        await apiMoviesDB.addMovie({
          name: this.movieData.nameRu,
          descr: this.movieData.description,
          poster: this.movieData.posterUrl,
          userId: localStorage.getItem('userId'),
          rating: parseFloat(this.movieRating)
        })
        this.$router.push({ name: 'manage' })
      } catch (error) {
        console.error('Error:', error.message)
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
