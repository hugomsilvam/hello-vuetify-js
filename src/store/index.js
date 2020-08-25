import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    labels: ['hugo'], // list of strings (avoid duplicated strings)
    notes: []
  },
  mutations: {
    addLabel: (state, payload) => {
      console.log('mutation add label with payload', payload)
      if (!state.labels || !state.labels.length) {
        state.labels = []
      }
      state.labels.unshift(payload)
    }
  },
  actions: {
    addLabel: ({ state, commit }, payload) => {
      console.log('action add label with payload', payload)

      return new Promise((resolve, reject) => {
        // check if note label is new or not
        if (state.labels.includes(payload)) {
          reject('Duplicated note label!')
        } else {
          commit('addLabel', payload)
          resolve()
        }
      })
    }
  },
  modules: {
  },
  getters: {
    listNotes: (state) => {
      return state.notes.filter(note => (!note.reminderDate && !note.archived && !note.deleted))
    },
    listReminders: (state) => {
      return state.notes.filter(note => (note.reminderDate && !note.archived && !note.deleted))
    },
    listArchived: (state) => {
      return state.notes.filter(note => (note.archived && !note.deleted))
    },
    listDeleted: (state) => {
      return state.notes.filter(note => note.deleted)
    }
  }
})
