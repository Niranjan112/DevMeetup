<template>
  <v-dialog max-width="350" persistent v-model="editdialog">
    <template v-slot:activator="{ on }">
      <v-btn text x-small fab v-on="on" class="blue-grey--text text--darken-2">
        <v-icon>edit</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-container>
        <v-row>
          <v-card-title class="headline blue-grey--text text--darken-2">Edit Meetup</v-card-title>
            <v-col cols="12">
              <v-text-field
                prepend-icon="subject"
                name="title"
                label="Title"
                id="title"
                v-model="editedTitle"
                color="blue-grey darken-2"
                outlined
                required
              ></v-text-field>

              <v-textarea
                prepend-icon="description"
                name="description"
                label="Description"
                id="description"
                v-model="editedDescription"
                color="blue-grey darken-2"
                clearable
                auto-grow
                outlined
                required
              ></v-textarea>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark class="blue-grey darken-2" @click="onSaveChanges">Save Changes</v-btn>
                <v-btn dark class="blue-grey darken-2" @click="editdialog = false">Cancel</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['meetup'],
  data () {
    return {
      editdialog: false,
      editedTitle: this.meetup.title,
      editedDescription: this.meetup.description
    }
  },
  methods: {
    onSaveChanges () {
      if (this.editedTitle.trim() === '' || this.editedDescription === '') {
        return
      }
      this.editdialog = false
      this.$store.dispatch('updateMeetupData', {
        id: this.meetup.id,
        title: this.editedTitle,
        description: this.editedDescription
      })
    }
  }
}
</script>
