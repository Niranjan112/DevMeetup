<template>
  <v-container>
    <v-row justify="center">
      <v-col xs="12" sm="6">
        <h2 class="blue-grey--text text--darken-2 text-center">Create a new Meetup</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-form @submit.prevent="onCreateMeetup">
          <v-row justify="center">
            <v-col xs="12" sm="6">
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="title"
                color="blue-grey darken-2"
                outlined
                required
              ></v-text-field>

              <v-text-field
                name="location"
                label="Location"
                id="location"
                v-model="location"
                color="blue-grey darken-2"
                outlined
                required
              ></v-text-field>

              <v-text-field
                name="imageUrl"
                label="Image URL"
                id="image-url"
                v-model="imageUrl"
                color="blue-grey darken-2"
                outlined
                required
              ></v-text-field>

              <v-img :src="imageUrl" alt="image"></v-img>
              <v-date-picker
                v-model="date"
                full-width
                :landscape="$vuetify.breakpoint.smAndUp"
                class="my-4"
                color="blue-grey darken-2"
              ></v-date-picker>
              <v-time-picker
                v-model="time"
                :landscape="$vuetify.breakpoint.smAndUp"
                full-width
                color="blue-grey darken-2"
                format="24hr"
                class="mb-4"
              ></v-time-picker>
              <v-textarea
                name="description"
                label="Description"
                id="description"
                v-model="description"
                color="blue-grey darken-2"
                clearable
                auto-grow
                outlined
                required
              ></v-textarea>
              <div class="text-center">
                <v-btn
                  class="blue-grey darken-2 white--text"
                  :disabled="!formIsValid"
                  type="submit"
                  color="blue-grey darken-2"
                >Create Meetup</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      location: '',
      imageUrl: '',
      description: '',
      date: '',
      time: new Date()
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' && this.location !== '' && this.imageUrl !== '' && this.description !== ''
    },
    submittableDateTime () {
      const date = new Date(this.date)
      if (typeof this.time === 'string') {
        let hours = this.time.match(/^(\d+)/)[1]
        const minutes = this.time.match(/:(\d+)/)[1]
        date.setHours(hours)
        date.setMinutes(minutes)
      } else {
        date.setHours(this.time.getHours())
        date.setMinutes(this.time.getMinutes())
      }
      return date
    }
  },
  methods: {
    onCreateMeetup () {
      if (!this.formIsValid) {
        return
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: this.submittableDateTime
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/meetups')
    }
  }
}
</script>
