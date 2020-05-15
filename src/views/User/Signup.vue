<template>
  <v-container>
    <v-row v-if="error" justify="center">
      <v-col cols="12" sm="6">
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <v-card outlined>
          <v-row>
            <v-col cols="12">
              <v-card-title class="justify-center blue-grey--text darken-2">
                <h2>Sign Up</h2>
              </v-card-title>
              <v-divider class="blue-grey darken-2 mx-2"></v-divider>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div justify="center" align="center">
                <v-img
                  src="@/assets/signupicon.png"
                  height="100"
                  width="100"
                  justify="center"
                >
                </v-img>
              </div>
            </v-col>
          </v-row>
          <v-card-text>
            <v-form @submit.prevent="onSignUp" ref="signUpForm">
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
                      :rules="emailRules"
                      outlined
                      required
                    ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="10" offset="1">
                  <v-text-field
                    :append-icon="showPassword1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword1 ? 'text' : 'password'"
                    @click:append="showPassword1 = !showPassword1"
                    name="password"
                    label="Password"
                    id="password"
                    color="blue-grey darken-2"
                    v-model="password"
                    prepend-icon="vpn_key"
                    :rules="[rules.requirePassword]"
                    outlined
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="10" offset="1">
                  <v-text-field
                    :append-icon="showPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword2 ? 'text' : 'password'"
                    @click:append="showPassword2 = !showPassword2"
                    name="confirmPassword"
                    label="Confirm Password"
                    id="confirmPassword"
                    v-model="confirmPassword"
                    :rules="[rules.comparePasswords, rules.requirePassword]"
                    color="blue-grey darken-2"
                    prepend-icon="vpn_key"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="text-center">
                <v-col cols="6" offset="3">
                  <v-btn
                    type="submit"
                    :disabled="loading"
                    :loading="loading"
                    color="success"
                    block
                  >
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
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
      v-model="emailVerificationDialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Email Verification</v-card-title>

        <v-card-text>
          A link has been sent to your email address.
           Kindly click on link to verify your email address and come back here to Sign in
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="onOk()"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      emailVerificationDialog: false,
      rules: {
        comparePasswords: value => value === this.password || 'Password do not match',
        requirePassword: value => !!value || 'Password is required'
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
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
    },
    messageDialog () {
      return this.$store.getters.messageDialog
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    },
    messageDialog (value) {
      console.log(value)
      this.emailVerificationDialog = value
    }
  },
  methods: {
    onSignUp () {
      if (this.$refs.signUpForm.validate()) {
        this.$store.dispatch('signUserUp', { email: this.email, password: this.password })
      }
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    },
    onOk () {
      this.$refs.signUpForm.reset()
      this.emailVerificationDialog = false
      this.$store.state.messageDialog = false
      this.$router.push('/signin')
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
