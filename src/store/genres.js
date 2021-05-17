import axios from 'axios'

export default {
  namespaced: true,

  state: {
    listGenres: null
  },

  getters: {
    getListGenres (state) {
      return state.listGenres
    },
  },

  mutations: {
    setListGenres (state, value) {
      state.listGenres = value
    }
  },

  actions: {
    async setListGenres({ commit }) {
      await axios.get('/api/genres')
        .then(({data})  => {
          commit('setListGenres', data.data);
        })
        .catch(() =>
        {
          commit('setListGenres', null);
        })
    },
  }
}