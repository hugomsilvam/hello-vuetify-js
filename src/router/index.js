import Vue from 'vue'
import VueRouter from 'vue-router'
import Notes from '../views/Notes.vue'
import Reminders from '../views/Reminders'
import Archive from '../views/Archive'
import Trash from '../views/Trash'
import Labels from '../views/Labels'
import LabelModal from '../components/LabelModal'
import NoteModal from '../components/NoteModal'
import ReminderModal from '../components/ReminderModal'

Vue.use(VueRouter)

const routes = [
  {
    path: '/addlabel',
    name: 'Add note label',
    component: LabelModal
  },
  {
    path: '/addnote',
    name: 'Add note',
    component: NoteModal,
  },
  {
    path: '/addreminder',
    name: 'Add reminder',
    component: ReminderModal
  },
  {
    path: '/notes',
    name: 'View notes',
    component: Notes
  },
  {
    path: '/reminders',
    name: 'View reminders',
    component: Reminders
  },
  {
    path: '/archive',
    name: 'Archived notes',
    component: Archive
  },
  {
    path: '/trash',
    name: 'Deleted notes',
    component: Trash
  },
  {
    path: '/label/:label',
    name: 'filter by label',
    component: Labels
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
