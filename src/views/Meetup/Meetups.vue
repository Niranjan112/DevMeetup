<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="pl-3 pr-3 blue-grey lighten-4">
          <v-row>
            <v-col xs="12" sm="4">
              <v-img
                height="200px"
                src="https://cdn.britannica.com/s:700x450/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg"
              >
              </v-img>
            </v-col>
            <v-col sm="8">
              <v-card-title class="blue-grey--text text--darken-2">
                <div>
                  <h2>Meetup</h2>
                  <div>17th July 2017</div>
                </div>
              </v-card-title>
              <v-card-actions class="d-flex align-end">
                <v-btn text class="blue-grey--text text--darken-2" x-large to="/meetups/1">
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
