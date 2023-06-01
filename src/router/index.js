import { createRouter, createWebHashHistory } from 'vue-router'
import PokemonView from '../views/PokemonView.vue'

const routes = [
  {
    path: '/',
    name: 'pokemon',
    component: PokemonView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
