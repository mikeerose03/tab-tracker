 <template>
  <v-layout justify-center>
    <v-flex xs12 sm8 md6>
      <panel title="Songs">
        <v-btn
          slot="action"
          class="blue"
          fab
          dark
          medium
          right
          absolute
          :to="{name:'songs-create'}">
          <v-icon>add</v-icon>
        </v-btn>
        <div
          v-for="song in songs"
          :key="song.id"
          class="song">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">{{song.title}}</div>
              <div class="song-artist">{{song.artist}}</div>
              <div class="song-genre">{{song.genre}}</div>
              <v-btn
                class="cyan"
                :to="{
                  name: 'song',
                  params: {
                    songId: song.id
                  }
                }"
                dark>View Song</v-btn>
            </v-flex>
            <v-flex xs6>
              <img class="song-album" :src="song.albumImageUrl" alt="">
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      songs: null
    }
  },
  components: {
    Panel
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title{
  font-size: 30px;
}
.song-artist{
  font-size: 24px;
}
.song-genre{
  font-size: 18px;
}
.song-album {
  width: 100%;
  margin: 0 auto;
}
</style>
