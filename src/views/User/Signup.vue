<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-text>
            <v-container>
              <v-form>
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
                    <v-btn type="submit">Sign Up</v-btn>
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
      showPassword2: true,
      rules: {
        comparePasswords: value => value === this.password || 'Password do not match'
      }
    }
  },
  methods: {
    onSignUp () {
      console.log({ email: this.email, password: this.password, confirmPassword: this.confirmPassword })
    }
  }
}
</script>
