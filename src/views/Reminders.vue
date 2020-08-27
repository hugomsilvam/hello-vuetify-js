<template>
  <div class="reminders">
    <div v-for="(item,index) in notes" :key="index">
      <NoteCard :note="item" />
    </div>
  </div>
</template>

<script>
import NoteCard from "../components/NoteCard.vue";
import { mapGetters } from "vuex";
export default {
  name: "Reminders",
  components: { NoteCard },
  computed: {
    ...mapGetters({
      notes: "listReminders",
    }),
  },
};
</script>