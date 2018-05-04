<template>
  <panel title="Lyrics">
    <v-text-field
      readonly
      multi-line
      v-model="lyrics"></v-text-field>
  </panel>
</template>
<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  props: [
    'lyrics'
  ]
}
</script>
<style scoped>

</style>
