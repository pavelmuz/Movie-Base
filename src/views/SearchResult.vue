<template>
  <div>
    <h4 style="text-align: center; margin-top: 1rem">Результаты поиска</h4>
  </div>
  <ul class="list-group" style="margin: 0 auto; width: 50%">
    <li class="list-group-item list-group-item-light" v-for="movie in movieList.items" :key="movie">
      <router-link :to="{ name: 'search-edit', params: { id: movie.kinopoiskId } }"
        >{{ movie.nameOriginal }} / {{ movie.nameRu }}</router-link
      >
    </li>
  </ul>
</template>

<script>
import useMoviesStore from '@/stores/movies'
import { mapState } from 'pinia'

export default {
  name: 'SearchResult',
  computed: {
    ...mapState(useMoviesStore, ['movieList'])
  }
}
</script>

<style scoped>
.search-result {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
}
</style>
