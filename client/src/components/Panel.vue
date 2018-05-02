<template>
  <v-card class="elevation-2">
    <v-toolbar flat dense class="cyan" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <slot name="action"></slot>
    </v-toolbar>
    <v-card-text>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: [
    'title'
  ]
}
</script>
<style scoped></style>
