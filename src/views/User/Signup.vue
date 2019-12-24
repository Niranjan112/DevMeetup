<template>
  <v-container>
    <v-row v-if="error">
      <v-col cols="12" sm6>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-text>
            <v-container>
              <v-form @submit.prevent="onSignUp">
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="email"
                      type="email"
                      required
                    ></v-text-field>
                    <v-text-field
                      :append-icon="showPassword1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassword1 ? 'text' : 'password'"
                      @click:append="showPassword1 = !showPassword1"
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      required
                    ></v-text-field>
                    <v-text-field
                      :append-icon="showPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassword2 ? 'text' : 'password'"
                      @click:append="showPassword2 = !showPassword2"
                      name="confirmPassword"
                      label="Confirm Password"
                      id="confirmPassword"
                      v-model="confirmPassword"
                      :rules="[rules.comparePasswords]"
                    ></v-text-field>
                    <v-btn type="submit" :disabled="loading" :loading="loading">
                      Sign Up
                      <template v-slot:loader>
                        <span class="custom-loader">
                          <v-icon light>cached</v-icon>
                        </span>
                      </template>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
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
      confirmPassword: '',
      showPassword1: false,
      showPassword2: false,
      rules: {
        comparePasswords: value => value === this.password || 'Password do not match'
      }
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
    onSignUp () {
      this.$store.dispatch('signUserUp', { email: this.email, password: this.password })
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
