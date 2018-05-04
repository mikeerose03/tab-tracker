<template>
  <v-container>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song"/>
        <v-btn
          class="cyan"
          :to="{
            name: 'songs-edit',
            params: {
              songId: song.id
            }
          }"
          dark>Edit Song</v-btn>
      </v-flex>
      <v-flex xs6 class="ml-2">
        <song-youtube-video :youtubeId="song.youtubeId"/>
      </v-flex>
    </v-layout>

    <v-layout class="mt-4">
      <v-flex xs6>
        <song-tabs :tabs="song.tab"/>
      </v-flex>
      <v-flex xs6 class="ml-2">
        <song-lyrics :lyrics="song.lyrics"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import SongsService from '@/services/SongsService'
import SongMetadata from './SongMetadata'
import SongYoutubeVideo from './SongYoutubeVideo'
import SongLyrics from './SongLyrics'
import SongTabs from './SongTabs'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      song: {}
    }
  },
  components: {
    Panel,
    SongMetadata,
    SongYoutubeVideo,
    SongLyrics,
    SongTabs
  },
  async mounted () {
    this.song = (await SongsService.show(this.$store.state.route.params.songId)).data
  }
}
</script>
<style scoped>
</style>
