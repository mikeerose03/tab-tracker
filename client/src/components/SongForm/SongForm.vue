<template>
  <v-layout justify-center>
    <v-flex xs4>
      <panel title="Song Form">
        <v-form>
          <v-text-field
            name="title"
            label="Title"
            type="title"
            :rules="[required]"
            v-model="song.title" required></v-text-field>
          <v-text-field
            name="artist"
            label="Artist"
            type="artist"
            :rules="[required]"
            v-model="song.artist" required></v-text-field>
          <v-text-field
            name="album"
            label="Album"
            type="album"
            :rules="[required]"
            v-model="song.album" required></v-text-field>
          <v-text-field
            name="albumImageUrl"
            label="Album Image Url"
            type="albumImageUrl"
            :rules="[required]"
            v-model="song.albumImageUrl" required></v-text-field>
          <v-text-field
            name="genre"
            label="Genre"
            type="genre"
            :rules="[required]"
            v-model="song.genre" required></v-text-field>
          <v-text-field
            name="youtubeId"
            label="Youtube ID"
            type="youtubeId"
            :rules="[required]"
            v-model="song.youtubeId" required></v-text-field>
          <div class="error-tx" v-html="error" />
        </v-form>
      </panel>
    </v-flex>

    <v-flex xs6>
      <panel title="Song Details" class="ml-2">
        <v-form>
          <v-text-field
            name="lyrics"
            label="Lyrics"
            type="lyrics"
            :rules="[required]"
            multi-line
            v-model="song.lyrics" required></v-text-field>
          <v-text-field
            name="tab"
            label="Tab"
            type="tab"
            :rules="[required]"
            multi-line
            v-model="song.tab" required></v-text-field>
          <div class="error" v-html="error"></div>
        </v-form>
      </panel>
      <div class="error" v-if="error">{{error}}</div>
      <v-btn class="cyan" @click="submit" dark>Submit</v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'submit',
    'song',
    'required',
    'error'
  ],
  components: {
    Panel
  }
}
</script>
<style scoped></style>
