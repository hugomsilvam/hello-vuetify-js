<template>
  <div class="labels">
    <div v-for="(item,index) in notes" :key="index">
      <NoteCard :note="item" />
    </div>
  </div>
</template>

<script>
import NoteCard from "../components/NoteCard.vue";
export default {
  name: "Labels",
  components: { NoteCard },
  computed: {
    notes() {
      return this.$store.getters.listNotesByLabel(this.$route.params.label);
    },
  },
};
</script>