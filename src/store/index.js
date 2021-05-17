import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import discs from './discs'
import genres from './genres'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        discs,
        genres,
    }
})