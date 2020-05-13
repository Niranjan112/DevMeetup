<template>
  <v-dialog v-model="registerDialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on" class="blue-grey darken-2 px-10" dark large>
        {{ userIsRegistered ? 'Unregister' : 'Register' }}
      </v-btn>
    </template>
    <v-card>
      <v-container>
        <v-row>
          <v-card-title
            v-if="userIsRegistered"
            class="headline blue-grey--text text--darken-2"
          >
            Unregister from Meetup?
          </v-card-title>
          <v-card-title
            v-else
            class="headline blue-grey--text text--darken-2"
          >
            Register for Meetup?
          </v-card-title>
            <v-col cols="12">
              <v-card-text>You can always change your decision later on.</v-card-text>
              <v-card-actions>
                <v-btn
                  class="red--text darken-1"
                  text
                  @click="registerDialog = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  class="green--text darken-1"
                  text
                  @click="onAgree"
                >Confirm</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['meetupId'],
  data () {
    return {
      registerDialog: false
    }
  },
  computed: {
    userIsRegistered () {
      return this.$store.getters.user.registeredMeetups.findIndex(meetupId => {
        return meetupId === this.meetupId
      }) >= 0
    }
  },
  methods: {
    onAgree () {
      if (this.userIsRegistered) {
        this.$store.dispatch('unregisterUserFromMeetup', this.meetupId)
      } else {
        this.$store.dispatch('registerUserForMeetup', this.meetupId)
      }
    }
  }
}
</script>
