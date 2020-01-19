<template>
  <v-dialog max-width="350" v-model="editDialog">
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on" class="blue-grey--text text--darken-2" small>
        Edit Date
      </v-btn>
    </template>
    <v-card>
      <v-container>
        <v-row>
          <v-card-title class="headline blue-grey--text text--darken-2">Edit Meetup Date</v-card-title>
            <v-col cols="12">
              <v-date-picker
                v-model="editableDate"
                full-width
                color="blue-grey darken-2"
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
              </v-date-picker>
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
      editableDate: null
    }
  },
  methods: {
    onSaveChanges () {
      const newDate = new Date(this.meetup.date)
      const newDay = new Date(this.editableDate).getUTCDate()
      const newMonth = new Date(this.editableDate).getUTCMonth()
      const newYear = new Date(this.editableDate).getUTCFullYear()
      newDate.setUTCDate(newDay)
      newDate.setUTCMonth(newMonth)
      newDate.setUTCFullYear(newYear)
      this.$store.dispatch('updateMeetupData', {
        id: this.meetup.id,
        date: newDate
      })
    }
  }
}
</script>
