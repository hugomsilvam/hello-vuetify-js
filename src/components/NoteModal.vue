<template>
  <div class="note-modal">
    <v-form @submit.prevent="onSubmit" ref="formAddNote" lazy-validation>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">Add a note</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="noteTitle"
                      :rules="rules.noteTitle"
                      :counter="20"
                      label="Note Title*"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-textarea
                      v-model="noteDescription"
                      :auto-grow="true"
                      :rows="1"
                      label="Note Description"
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-select
                      v-model="noteLabels"
                      :items="labels"
                      :chips="true"
                      :multiple="true"
                      :appendSlot="true"
                      label="Label"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDialog">Close</v-btn>
              <v-btn color="red darken-1" text @click.prevent="onSubmit">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NoteModal",
  data() {
    return this.initialState();
  },

  methods: {
    initialState() {
      return {
        dialog: true,
        noteTitle: "",
        noteDescription: "",
        noteLabels: [],
        rules: {
          noteTitle: [
            (v) => !!v || "Note Title is required!",
            (v) =>
              (!!v && v.length <= 20) ||
              "Note title must have less than 20 characters",
          ],
        },
      };
    },

    onSubmit() {
      if (!this.$refs.formAddNote.validate()) {
        return false;
      } else {
        let payload = {
          title: this.noteTitle,
          description: this.noteDescription,
          labels: this.noteLabels,
          archived: false,
          deleted: false,
        };

        console.log("save note with payload ", payload);
        return this.saveNote(payload);
      }
    },

    saveNote(payload) {
      return this.$store
        .dispatch("addNote", payload)
        .then(() => {
          return this.closeDialog();
        })
        .catch((error) => {
          console.error("ERROR saving note - ", error);
        });
    },

    closeDialog() {
      this.resetDialog();
      this.dialog = false;
    },

    resetDialog() {
      // Return all fields to initial state
      Object.assign(this.$data, this.initialState());

      // Reset forms
      this.$refs.formAddNote.reset();
    },
  },

  computed: {
    ...mapState(["labels"]),
  },
};
</script>