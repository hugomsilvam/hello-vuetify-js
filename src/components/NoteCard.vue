<template>
  <div class="note-card">
    <v-card key="note.id">
      <v-card-title>{{note.title}}</v-card-title>
      <v-card-subtitle v-if="note.labels">labels: {{note.labels}}</v-card-subtitle>
      <v-card-text v-if="note.description">{{note.description}}</v-card-text>
      <v-list-item v-if="note.date">
        <v-list-item-icon>
          <v-icon>mdi-alarm</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>{{note.date}}</v-list-item-subtitle>
      </v-list-item>
      <v-card-actions>
        <v-btn icon @click="editNote">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon @click="archiveNote">
          <v-icon>mdi-archive</v-icon>
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
    editNote() {
      console.log("edit note", this.note.id);
    },

    archiveNote() {
      console.log("archive note");
    },

    deleteNote() {
      console.log("delete note");
    },
  },
};
</script>