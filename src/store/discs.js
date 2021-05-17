import axios from 'axios'

export default {
  namespaced: true,

  state: {
    listDiscs: null,
  },

  getters: {
    getListDiscs (state) {
      return state.listDiscs
    },
  },

  mutations: {
    setListDiscs (state, value) {
      state.listDiscs = value
    },
  },

  actions: {
    async setListDiscs({ commit }) {
      await axios.get('/api/discs')
        .then( ({data}) => {
          commit('setListDiscs', data.data);
        })
        .catch(() =>
        {
          commit('setListDiscs', null);
        })
    },
  }
}