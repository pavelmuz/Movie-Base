<template>
  <div v-for="movie in moviesFound" :key="movie" class="movie-cards">
    <div class="card mb-3" style="max-width: 800px">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="movie.poster" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ movie.name }}</h5>
            <h6>Мой рейтинг: {{ movie.rating }}</h6>
            <p class="card-text">
              {{ movie.descr }}
            </p>
            <div>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click.prevent="deleteMovie(movie._id)"
                style="margin-right: 1rem; width: 40%"
              >
                Удалить фильм
              </button>
              <button
                type="button"
                class="btn btn-outline-primary"
                style="width: 40%"
                @click.prevent="$router.push({ name: 'update', params: { id: movie._id } })"
              >
                Изменить рейтинг
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button
    type="button"
    class="btn btn-primary add-button"
    @click.prevent="$router.push({ name: 'add-movie' })"
  >
    Добавить фильм
  </button>
</template>

<script>
import apiMoviesDB from '@/includes/apiMoviesDB'

export default {
  name: 'ManageRating',
  data() {
    return {
      moviesFound: {}
    }
  },
  async mounted() {
    try {
      this.moviesFound = await apiMoviesDB.findMovies('userId', localStorage.getItem('userId'))
      this.moviesFound.sort((a, b) => b.rating - a.rating)
    } catch (error) {
      console.error('Error:', error.message)
    }
  },
  methods: {
    async deleteMovie(id) {
      try {
        console.log(id)
        apiMoviesDB.deleteMovie(id)
        window.location.reload()
      } catch (error) {
        console.error('Error:', error.message)
      }
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
.add-button {
  display: block;
  margin: 1rem auto 2rem auto;
  width: 20%;
}
</style>
