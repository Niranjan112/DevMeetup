<template>
  <v-container>
    <v-row v-if="error" justify="center">
      <v-col cols="12" sm="6">
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6">
        <v-card outlined>
          <v-row>
            <v-col cols="12">
              <v-card-title class="justify-center blue-grey--text darken-2">
                <h2>Sign In</h2>
              </v-card-title>
              <v-divider class="blue-grey darken-2 mx-2"></v-divider>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div justify="center" align="center">
                <v-img
                  src="@/assets/signinicon.png"
                  height="100"
                  width="100"
                  justify="center"
                >
                </v-img>
              </div>
            </v-col>
          </v-row>
          <v-card-text>
            <v-form @submit.prevent="onSignIn">
                <v-row>
                  <v-col cols="10" offset="1">
                    <v-text-field
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="email"
                      type="email"
                      color="blue-grey darken-2"
                      prepend-icon="email"
                      outlined
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="10" offset="1">
                    <v-text-field
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassword ? 'text' : 'password'"
                      @click:append="showPassword = !showPassword"
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      color="blue-grey darken-2"
                      prepend-icon="vpn_key"
                      outlined
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="text-center">
                  <v-col cols="6" offset="3">
                    <v-btn
                      block
                      type="submit"
                      :disabled="loading"
                      :loading="loading"
                      color="success"
                    >
                      Sign In
                      <template v-slot:loader>
                        <span class="custom-loader">
                          <v-icon light>cached</v-icon>
                        </span>
                      </template>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      showPassword: false
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignIn () {
      this.$store.dispatch('signUserIn', { email: this.email, password: this.password })
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
