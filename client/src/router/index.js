import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs'
import CreateSong from '@/components/CreateSong'
import EditSong from '@/components/EditSong'
import Song from '@/components/ViewSong/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Register
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    },
    {
      path: '/songs/edit/:songId',
      name: 'songs-edit',
      component: EditSong
    },
    {
      path: '/songs/:songId ',
      name: 'song',
      component: Song
    }
  ]
})
