<template>
  <form class="add-form">
    <div class="mb-3">
      <h5 style="margin-bottom: 3%">Введите название фильма:</h5>
      <input type="text" class="form-control" v-model="movieTitle" style="width: 500px" />
      <button
        class="btn btn-secondary"
        style="margin-top: 1rem; margin-right: 2%; width: 20%"
        @click.prevent="$router.push({ name: 'manage' })"
      >
        Назад
      </button>
      <button
        class="btn btn-primary"
        style="margin-top: 1rem; width: 20%"
        @click.prevent="findMovies"
      >
        Найти
      </button>
    </div>
  </form>
</template>

<script>
import apiMovies from '@/includes/apiMovies'
import useMoviesStore from '@/stores/movies'
import { mapWritableState } from 'pinia'

export default {
  name: 'AddMovie',
  data() {
    return {
      movieTitle: ''
    }
  },
  computed: {
    ...mapWritableState(useMoviesStore, ['movieList'])
  },
  methods: {
    async findMovies() {
      try {
        this.movieList = await apiMovies.getMovies(this.movieTitle)
        console.log(this.movieList)
        this.$router.push({ name: 'search-result' })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.add-form {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  width: auto;
}
</style>
