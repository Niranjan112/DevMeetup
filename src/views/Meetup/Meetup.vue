<template>
  <v-container>
      <v-row v-if="loading">
        <v-col class="d-flex justify-center">
          <v-progress-circular
            indeterminate
            color="primary"
            :width="7"
            :size="70"
            v-if="loading"
          ></v-progress-circular>
        </v-col>
      </v-row>
      <v-row v-else>
          <v-col cols="12" lg="8" offset-lg="2">
            <v-card>
              <v-card-title class="display-1">
                {{ meetup.title }}
                <template v-if="userIsCreator">
                  <v-spacer></v-spacer>
                  <edit-meetup :meetup="meetup"/>
                </template>
              </v-card-title>
              <v-img
                class="white--text hidden-sm-and-down"
                height="325px"
                :src="meetup.imageUrl"
              >
              </v-img>

              <v-img
                class="white--text hidden-md-and-up"
                height="200px"
                :src="meetup.imageUrl"
              >
              </v-img>

              <v-row>
                <v-col cols="12" lg="8">
                  <v-card-subtitle cols="12" class="pb-0">
                    {{ meetup.date | date }} - {{ meetup.location}}
                  </v-card-subtitle>
                </v-col>
                <v-col cols="12" lg="4" align-self="end" v-if="userIsCreator">
                  <v-card-actions>
                    <v-spacer class="d-none d-lg-flex"></v-spacer>
                    <edit-meetup-date :meetup="meetup" v-if="userIsCreator" />
                    <edit-meetup-time :meetup="meetup" v-if="userIsCreator" />
                  </v-card-actions>
                </v-col>
              </v-row>

              <v-card-text class="title font-weight-regular">
                {{ meetup.description }}
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <app-meetup-register-dialog
                  :meetupId="meetup.id"
                  v-if="userIsAuthenticated && !userIsCreator"
                >
                </app-meetup-register-dialog>
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
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    userIsCreator () {
      if (!this.userIsAuthenticated) {
        return false
      }
      return this.$store.getters.user.id === this.meetup.creatorId
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>
