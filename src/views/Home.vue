<template>
  <v-container>
    <v-row align="center">
      <v-col class="text-center" cols="12" sm="6">
        <v-btn large router to="/meetups" dark class="blue darken-2">Explore Meetups</v-btn>
      </v-col>
      <v-col class="text-center" cols="12" sm="6">
        <v-btn large router to="/meetup/new" dark class="blue darken-2">Organize Meetup</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div class="text-center">
          <v-progress-circular
            indeterminate
            color="primary"
            :width="7"
            :size="70"
            v-if="loading"
          ></v-progress-circular>
        </div>
      </v-col>
    </v-row>

    <v-row v-if="!loading" justify="center">
      <v-col cols="12" sm="10">
        <v-carousel v-if="meetups.length" style="cursor: pointer" show-arrows-on-hover cycle interval="4000" height="425">
          <v-carousel-item
            v-for="meetup in meetups"
            :key="meetup.id"
            :src="meetup.imageUrl"
            @click="onLoadMeetup(meetup.id)">
            <div class="title text-center">
              {{meetup.title}}
            </div>
          </v-carousel-item>
        </v-carousel>

        <v-carousel
          v-else
          hide-delimiters
          :show-arrows="false"
        >
          <v-carousel-item>
            <v-sheet color="blue darken-2" height="100%">
              <v-row
                align="center"
                justify="center"
                class="fill-height"
              >
                <div class="display-3">No Meetup available</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>

        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.featuredMeetups
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/meetups/' + id)
    }
  }
}
</script>
<style scoped>
.title{
  color: white;
  background: rgba(0, 0, 0, 0.3);
  font-size: 2em;
}
</style>
