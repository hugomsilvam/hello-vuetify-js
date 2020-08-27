<template>
  <div class="note-card">
    <v-card key="note.id">
      <v-card-title>{{note.title}}</v-card-title>
      <v-card-text v-if="note.labels">
        <v-chip-group>
          <v-chip v-for="(label, index) in note.labels" :key="index" class="ma-2">{{label}}</v-chip>
        </v-chip-group>
      </v-card-text>
      <v-card-subtitle v-if="note.description">{{note.description}}</v-card-subtitle>
      <v-list-item v-if="note.date">
        <v-list-item-icon>
          <v-icon>mdi-alarm</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>{{note.date}}</v-list-item-subtitle>
      </v-list-item>
      <v-card-actions v-if="!note.deleted">
        <v-btn icon @click="editNote">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn v-if="!note.archived" icon @click="archiveNote">
          <v-icon>mdi-archive</v-icon>
        </v-btn>
        <v-btn v-else icon @click="restoreNote">
          <v-icon>mdi-backup-restore</v-icon>
        </v-btn>
        <v-btn icon @click="deleteNote">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "NoteCard",

  props: {
    note: {
      id: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
        default: "default title",
      },
      labels: {
        type: Array,
        required: false,
        default: [],
      },
      description: {
        type: String,
        required: false,
        default: "default description",
      },
    },
  },

  methods: {
    archiveNote() {
      const payload = { id: this.note.id };
      this.$store.dispatch("archiveNote", payload);
    },

    restoreNote() {
      const payload = { id: this.note.id };
      this.$store.dispatch("restoreNote", payload);
    },

    deleteNote() {
      const payload = { id: this.note.id };
      this.$store.dispatch("deleteNote", payload);
    },

    editNote() {
      console.log("TODO - edit note");
    },
  },
};
</script>