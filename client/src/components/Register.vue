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
      <button type="submit"> Register </button>
    </form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email:'123',
      password: 'watchme'
    }
  },
  methods: {
    async register () {
      var response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>

</style>
