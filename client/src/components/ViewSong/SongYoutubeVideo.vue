<template>
  <panel title="Youtube Video">
    <youtube
      :video-id="youtubeId"
      :player-width="500"
      :player-height="240"></youtube>
  </panel>
</template>
<script>
import Panel from '@/components/Panel'
import VueYoutubeEmbed from 'vue-youtube-embed'
export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel,
    VueYoutubeEmbed
  }
}
</script>
<style scoped></style>
