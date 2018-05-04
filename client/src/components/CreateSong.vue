<template>
  <song-form
    :song="song"
    :submit="create"
    :required="required"
    :error="error"/>
</template>
<script>
import SongsService from '@/services/SongsService'
import SongForm from '@/components/SongForm/SongForm'
export default {
  components: {
    SongForm
  },
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      let areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])

      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all required fields.'
        return
      }

      try {
        await SongsService.post(this.song)
        this.$router.push({ name: 'songs' })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped></style>
