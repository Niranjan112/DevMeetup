<template>
  <v-container>
    <v-row v-for="meetup in meetups" :key="meetup.id">
      <v-col cols="12">
        <v-card class="pl-3 pr-3 blue-grey lighten-4">
          <v-row>
            <v-col xs="12" sm="4">
              <v-img
                height="200px"
                :src="meetup.imageUrl"
              >
              </v-img>
            </v-col>

            <v-col sm="8">
              <v-card-title class="blue-grey--text text--darken-2">
                <div>
                  <h2>{{ meetup.title }}</h2>
                  <div>{{ meetup.date }}</div>
                </div>
              </v-card-title>
              <v-card-actions class="d-flex align-end">
                <v-btn text class="blue-grey--text text--darken-2" x-large :to="'/meetups/' + meetup.id">
                  <v-icon left>arrow_forward</v-icon>View Meetup
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
          <v-row>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  }
}
</script>
