<template>
  <v-container>
      <v-row>
          <v-col cols="12">
            <v-card
              class="mx-auto blue-grey lighten-4"
              max-width="800"
            >
              <v-card-title class="headline blue-grey--text text--darken-2">{{ meetup.title }}</v-card-title>
              <v-img
                class="white--text align-end hidden-sm-and-down"
                height="325px"
                :src="meetup.imageUrl"
              >
              </v-img>

              <v-img
                class="white--text align-end hidden-md-and-up"
                height="200px"
                :src="meetup.imageUrl"
              >
              </v-img>

              <v-card-subtitle class="pb-0">{{ meetup.date }} - {{ meetup.location}}</v-card-subtitle>

              <v-card-text class="text--primary subtitle-1">
                <div>{{ meetup.description }}</div>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  dark
                  class="blue-grey darken-2 px-10"
                  text
                  large
                >
                  Register
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>
