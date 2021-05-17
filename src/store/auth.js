import axios from 'axios'

export default {
  namespaced: true,

  state: {
    authenticated: false,
    user: null
  },

  getters: {
    authenticated (state) {
      return state.authenticated
    },

    user (state) {
      return state.user
    },

    rol (state) {
      return state.user.rol_name
    }
  },

  mutations: {
    setAuth (state, value) {
      state.authenticated = value
    },

    setUser (state, user) {
      state.user = user
    }
  },

  actions: {
    async signIn({ dispatch }, credentials) {
      await axios.get('sanctum/csrf-cookie')
      await axios.post('api/login', credentials)
        
      return dispatch('me')
    },

    async signOut({ commit }) {
      await axios.post('api/logout')
        .then(() => {
          commit('setAuth', false);
          commit('setUser', null);
        })
    },

    async me({ commit }) {
      return await axios.get('api/user')
        .then( (res) => {
          commit('setAuth', true)
          commit('setUser', res.data)
        })
        .catch(() => {
          commit('setAuth', false)
          commit('setUser', null)
        })
    }
  }
}