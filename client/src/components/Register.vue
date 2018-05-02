<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md6>
      <panel title="Register">
        <v-form @submit.prevent="register">
          <v-text-field
            name="email"
            label="Email"
            type="email"
            v-model="email" required></v-text-field>
          <v-text-field
            name="password"
            label="Password"
            type="password"
            v-model="password" required></v-text-field>
          <div class="error-tx" v-html="error" />
          <v-btn class="cyan" type="submit" dark>Submit</v-btn>
        </v-form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  components: {
    Panel
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
