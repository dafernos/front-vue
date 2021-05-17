import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import DiscsList from '../views/DiscsList.vue'
import DiscDetail from '../views/DiscDetail.vue'
import GenresList from '../views/GenresList.vue'
import Genres from '../views/Genres.vue'
import GenreDetail from '../views/GenreDetail.vue'
import store from "@/store";

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    title: 'Discs',
    icon: 'mdi-view-dashboard',
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/list-discs',
    name: 'list-discs',
    component: DiscsList,
    meta: {
      requiresAuth: true,
      requiresRol: 'Admin',
    }
  },
  {
    path: '/disc/:id',
    name: 'disc-detail',
    component: DiscDetail,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/list-genres',
    name: 'list-genres',
    component: GenresList,
    meta: {
      requiresAuth: true,
      requiresRol: 'Admin',
    }
  },
  {
    path: '/genres',
    name: 'genres',
    component: Genres,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/genre/:id',
    name: 'genre-detail',
    component: GenreDetail,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      hideForAuth: true,
      requiresAuth: false
    }
  }
]
    

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters['auth/authenticated']) {
      next({ path: '/login' });
    }
  }
  
  if (to.matched.some(record => record.meta.requiresRol)) {
    if (!store.getters['auth/rol'] === 'Admin') {
      next({ path: '/' });
    }
  }

  next();
})
export default router
