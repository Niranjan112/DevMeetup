<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" :sm="meetups.length > 1 ? 6 : 10" v-for="meetup in meetups" :key="meetup.id">
        <v-card outlined>
          <v-img
            class="white--text"
            :height="250"
            :src="meetup.imageUrl"
          >
          </v-img>
          <v-row align="center">
            <v-col cols="12" lg="7">
              <v-card-title><h5>{{ meetup.title }}</h5></v-card-title>
              <v-card-subtitle>{{ meetup.date | date }}</v-card-subtitle>
            </v-col>
            <v-col cols="12" lg="5">
              <v-card-actions>
                <v-spacer class="d-none d-lg-flex"></v-spacer>
                <v-btn text class="blue-grey--text text--darken-2" fab x-large :to="'/meetups/' + meetup.id">
                  <v-icon dark>arrow_forward</v-icon>
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
