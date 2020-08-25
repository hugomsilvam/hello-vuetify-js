<template>
  <div class="label-modal">
    <v-form @submit.prevent="onSubmit" ref="formAddNoteLabel" lazy-validation>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">Add a note label</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="noteLabel"
                      :rules="noteLabelRules"
                      :counter="15"
                      label="Note label name*"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="red darken-1" text @click="onSubmit">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "LabelModal",
  data() {
    return this.initialState();
  },
  methods: {
    initialState() {
      return {
        dialog: true,
        noteLabel: "",
        noteLabelRules: [
          (v) => !!v || "Note Label is required!",
          (v) =>
            (!!v && v.length <= 15) ||
            "Note label must less than 15 characteres",
        ],
      };
    },

    onSubmit() {
      if (!this.$refs.formAddNoteLabel.validate()) {
        return false;
      } else {
        return this.saveLabel();
      }
    },

    saveLabel() {
      return this.$store
        .dispatch("addLabel", this.noteLabel)
        .then(() => {
          return this.closeDialog();
        })
        .catch((error) => {
          console.error("ERROR saving note label - ", error);
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
      this.$refs.formAddNoteLabel.reset();
    },
  },
};
</script>