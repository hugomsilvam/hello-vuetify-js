import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    labels: ['hugo'], // list of strings (avoid duplicated strings)
    notes: [],
    reminders: [],
  },
  mutations: {
    addLabel: (state, payload) => {
      console.log('mutation add label with payload', payload)
      if (!state.labels || !state.labels.length) {
        state.labels = []
      }
      state.labels.unshift(payload)
    },

    addNote: (state, payload) => {
      console.log('mutation add note with payload', payload)
      if (!state.notes || !state.notes.length) {
        state.notes = []
      }
      state.notes.unshift(payload);
    },

    addReminder: (state, payload) => {
      console.log('mutation add reminder with payload', payload)
      if (!state.reminders || !state.reminders.length) {
        state.reminders = []
      }
      state.reminders.unshift(payload);
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
    },

    addNote: ({ state, commit }, payload) => {
      console.log('current state', state)
      console.log('action add note with payload ', payload)
      return new Promise((resolve) => {
        commit('addNote', payload);
        resolve()
      })
    },

    addReminder: ({ state, commit }, payload) => {
      console.log('current state', state)
      console.log('action add reminder with payload ', payload)
      return new Promise((resolve) => {
        commit('addReminder', payload)
        resolve();
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
