import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    licznik: 0
  },
  mutations: {
    dodaj(state) {
      state.licznik++;
    },
    odejmuj(state) {
      state.licznik--;
    }
  },
  actions: {
    zwiekszLicznik({commit}) {
      commit('dodaj')
    },
    zmniejszLicznik({commit}) {
      commit('odejmuj')
    },

  },
  getters: {
    pobierzLicznik: state=> {
      return state.licznik;
    }
  }

})

export default store
