<template>
  <div class="notes">
    <div v-for="(item,index) in notes" :key="index">
      <NoteCard :note="item" />
    </div>
  </div>
</template>

<script>
import NoteCard from "../components/NoteCard.vue";
import { mapGetters } from "vuex";
export default {
  name: "Notes",
  components: { NoteCard },
  computed: {
    ...mapGetters({
      notes: "listNotes",
    }),
  },
};
</script>