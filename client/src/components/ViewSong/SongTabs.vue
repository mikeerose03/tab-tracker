<template>
  <panel title="Tabs">
    <v-text-field
      readonly
      multi-line
      class="song-tabs"
      v-model="tabs"></v-text-field>
  </panel>
</template>
<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  props: [
    'tabs'
  ]
}
</script>
<style scoped>
.song-tabs {
  font-family: monospace;
}
</style>
