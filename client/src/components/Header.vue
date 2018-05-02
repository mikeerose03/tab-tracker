<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link to="root" class="btn btn--flat theme--dark">
        TabTracker
      </router-link>
    </v-toolbar-title>
  <!--   <v-toolbar-items>
      <router-link
        :to="songs"
        tag="v-btn"
        class="btn btn--flat theme--dark">
        Browse
      </router-link>
    </v-toolbar-items> -->

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <router-link
        to="login"
        tag="v-btn"
        class="btn btn--flat theme--dark"
        v-if="!$store.state.isUserLoggedIn">
        Login
      </router-link>
      <router-link
        to="register"
        tag="v-btn"
        class="btn btn--flat theme--dark"
        v-if="!$store.state.isUserLoggedIn">
        Sign Up
      </router-link>
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        @click="logout" flat dark>Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped></style>
