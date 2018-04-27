<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link to="root" tag="v-btn" class="btn btn--flat theme--dark">
        TabTracker
      </router-link>
    </v-toolbar-title>
    <!-- TODO -->
<!-- <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
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
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {}
</script>

<style scoped></style>
