import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    labels: ['hugo', 'aaa'], // list of strings (avoid duplicated strings)
    notes: [
      {
        id: 1,
        title: 'bananas da madeira',
        description: 'cenas cenas cenas',
        archived: false,
        deleted: false,
        labels: ['hugo'],
      },
      {
        id: 22,
        title: 'comprar pao',
        description: 'aaaaaaaaaaaaa',
        date: new Date(),
        archived: false,
        deleted: false,
        labels: ['aaa']
      }
    ],
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

      payload.id = state.notes.length + 1;
      state.notes.unshift(payload);
    },

    archiveNote: (state, index) => {
      console.log('mutation archive note with index', index)
      state.notes[index].archived = true
    },

    restoreNote: (state, index) => {
      console.log('mutation restore note with index', index)
      state.notes[index].archived = false
    },

    deleteNote: (state, index) => {
      console.log('mutation delete note with index', index)
      state.notes[index].deleted = true;
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
        commit('addNote', payload)
        resolve();
      })
    },

    archiveNote: ({ state, commit }, payload) => {
      console.log('action archive note with payload ', payload)
      return new Promise((resolve, reject) => {
        const index = state.notes.findIndex(note => note.id == payload.id)
        if (index != -1) {
          commit('archiveNote', index);
          resolve();
        } else {
          reject();
        }
      })
    },

    restoreNote: ({ state, commit }, payload) => {
      console.log('action restore note with payload ', payload)
      return new Promise((resolve, reject) => {
        const index = state.notes.findIndex(note => note.id == payload.id)
        if (index != -1) {
          commit('restoreNote', index);
          resolve();
        } else {
          reject();
        }
      })
    },

    deleteNote: ({ state, commit }, payload) => {
      console.log('action delete note with payload', payload)
      return new Promise((resolve, reject) => {
        const index = state.notes.findIndex(note => note.id == payload.id)
        if (index != -1) {
          commit('deleteNote', index)
          resolve()
        } else {
          reject()
        }
      })
    }
  },
  modules: {
  },
  getters: {
    listNotes: (state) => {
      return state.notes.filter(note => (!note.date && !note.archived && !note.deleted))
    },
    listReminders: (state) => {
      return state.notes.filter(note => (note.date && !note.archived && !note.deleted))
    },
    listArchived: (state) => {
      return state.notes.filter(note => (note.archived && !note.deleted))
    },
    listDeleted: (state) => {
      return state.notes.filter(note => note.deleted)
    },
    listNotesByLabel: (state) => (label) => {
      return state.notes.filter(note => note.labels.includes(label))
    }
  }
})
