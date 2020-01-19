<template>
  <v-dialog max-width="350" v-model="editDialog">
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on" class="blue-grey--text text--darken-2" small>
        Edit Time
      </v-btn>
    </template>
    <v-card>
      <v-container>
        <v-row>
          <v-card-title class="headline blue-grey--text text--darken-2">Edit Meetup Time</v-card-title>
            <v-col cols="12">
              <v-time-picker
                v-model="editableTime"
                full-width
                color="blue-grey darken-2"
                format="24hr"
              >
                <v-spacer></v-spacer>
                <v-btn
                  color="blue-grey darken-2"
                  text
                  @click="editDialog = false"
                >
                  Close
                </v-btn>
                <v-btn
                  color="blue-grey darken-2"
                  text
                  @click="onSaveChanges"
                >
                  Save
                </v-btn>
              </v-time-picker>
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
      editDialog: false,
      editableTime: null
    }
  },
  methods: {
    onSaveChanges () {
      const newDate = new Date(this.meetup.date)
      const hours = this.editableTime.match(/^(\d+)/)[1]
      const minutes = this.editableTime.match(/:(\d+)/)[1]
      newDate.setHours(hours)
      newDate.setMinutes(minutes)
      this.$store.dispatch('updateMeetupData', {
        id: this.meetup.id,
        date: newDate
      })
    }
  },
  created () {
    this.editableTime = new Date(this.meetup.date)
  }
}
</script>
