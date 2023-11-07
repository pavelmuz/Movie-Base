<template>
  <div>
    <h4 style="text-align: center; margin-top: 1rem; padding-bottom: 1rem">Список пользователей</h4>
    <ul class="list-group" style="margin: 0 auto; width: 22%">
      <li class="list-group-item list-group-item-light" v-for="user in usersFound" :key="user">
        <router-link :to="{ name: 'user-rating', params: { id: user._id, name: user.name } }">
          <h5>{{ user.name }}</h5>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import apiUsers from '@/includes/apiUsers'

export default {
  name: 'UserList',
  data() {
    return {
      usersFound: {}
    }
  },
  async mounted() {
    try {
      this.usersFound = await apiUsers.getUsers()
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped>
.search-result {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  margin-left: auto;
  margin-right: auto;
}
</style>
