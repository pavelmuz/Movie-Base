import { createRouter, createWebHistory } from 'vue-router'

const About = () => import('@/views/About.vue')
const AddMovie = () => import('@/views/AddMovie.vue')
const Home = () => import('@/views/Home.vue')
const Manage = () => import('@/views/Manage.vue')
const SearchEdit = () => import('@/views/SearchEdit.vue')
const SearchResult = () => import('@/views/SearchResult.vue')
const UpdateRating = () => import('@/views/UpdateRating.vue')
const Users = () => import('@/views/Users.vue')
const UsersRating = () => import('@/views/UsersRating.vue')

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'manage',
    path: '/manage',
    component: Manage
  },
  {
    name: 'update',
    path: '/update/:id',
    component: UpdateRating
  },
  {
    name: 'add-movie',
    path: '/add-movie',
    component: AddMovie
  },
  {
    name: 'about',
    path: '/about',
    component: About
  },
  {
    name: 'search-result',
    path: '/search-result',
    component: SearchResult
  },
  {
    name: 'search-edit',
    path: '/search-edit/:id',
    component: SearchEdit
  },
  {
    name: 'users',
    path: '/users',
    component: Users
  },
  {
    name: 'user-rating',
    path: '/user-rating/:name-:id',
    component: UsersRating
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
