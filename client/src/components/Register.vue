<template>
  <!-- <v-container fluid fill-height> -->
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                name="email"
                label="Email"
                type="email"
                v-model="email" required></v-text-field>
              <v-text-field
                name="password"
                label="Password"
                type="password"
                v-model="password"
                autocomplete="new-password" required></v-text-field>
            </v-form>
            <div class="error-tx" v-html="error" />
          </v-card-text>
          <v-card-actions>
            <v-btn class="cyan" @click="register" dark>Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  <!-- </v-container> -->
<!--   <div>
    <h1>REGISTER</h1>
    <form @submit.prevent="register">
      <input
        v-model="email"
        type="email"
        name="email"
        placeholder="email">
      <input
        v-model="password"
        type="password"
        name="password"
        placeholder="password">
      <div class="error" v-html="error" />
      <button type="submit"> Register </button>
    </form>
  </div> -->
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        var response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })

        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error-tx {
  color: red;
}
</style>
