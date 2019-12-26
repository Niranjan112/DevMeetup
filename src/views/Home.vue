<template>
  <div class="text-center">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 class="mt-3">
          <v-btn large router to="/meetups" dark class="blue darken-2">Explore Meetups</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="mt-3">
          <v-btn large router to="/meetup/new" dark class="blue darken-2">Organize Meetup</v-btn>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12 class="text-xs-center">
          <v-progress-circular
            indeterminate
            color="primary"
            :width="7"
            :size="70"
            v-if="loading"
          ></v-progress-circular>
        </v-flex>
      </v-layout>

      <v-layout row wrap class="mt-4" v-if="!loading">
        <v-flex xs12>
          <v-carousel style="cursor: pointer">
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
        </v-flex>
      </v-layout>

      <v-layout row wrap class="mt-2">
        <v-flex xs12 class="text-center">
          <p>Join our awesome meetup</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
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
