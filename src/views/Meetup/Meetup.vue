<template>
  <v-container>
      <v-row>
          <v-col cols="12">
            <v-card
              class="mx-auto blue-grey lighten-4"
              max-width="1000"
            >
              <v-card-title class="headline blue-grey--text text--darken-2">My Meetup</v-card-title>
              <v-img
                class="white--text align-end hidden-sm-and-down"
                height="350px"
                src="https://cdn.britannica.com/s:700x450/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg"
              >
              </v-img>

               <v-img
                class="white--text align-end hidden-sm-and-up"
                height="200px"
                src="https://cdn.britannica.com/s:700x450/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg"
              >
              </v-img>

              <v-card-subtitle class="pb-0">17th July 2017</v-card-subtitle>

              <v-card-text class="text--primary subtitle-1">
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor molestias nobis quod, impedit perspiciatis laudantium eligendi ipsum fuga sapiente ipsam fugiat laborum deleniti sequi suscipit corporis a debitis doloribus?</div>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  dark
                  class="blue-grey darken-2 px-10"
                  text
                  x-large
                >
                  Register
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>
