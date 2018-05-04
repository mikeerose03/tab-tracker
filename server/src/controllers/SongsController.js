const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      var songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (error) {
      res.status(500).send({
        error: 'Something went wrong while fetching songs'
      })
    }
  },
  async post (req, res) {
    try {
      var song = await Song.create(req.body)
      res.send(song)
    } catch (error) {
      res.status(500).send({
        error: 'Something went wrong while adding song'
      })
    }
  },
  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (error) {
      console.log(error)
      res.status(500).send({
        error: 'Something went wrong while fetching song'
      })
    }
  },
  async put (req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (error) {
      res.status(500).send({
        error: 'Something went wrong while updating song'
      })
    }
  }
}
