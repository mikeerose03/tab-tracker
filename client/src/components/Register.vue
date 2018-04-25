<template>
  <div>
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
  </div>
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
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
