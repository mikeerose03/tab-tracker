'use strict';
module.exports = (sequelize, DataTypes) => {
  var Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    album: DataTypes.STRING,
    albumImageUrl: DataTypes.STRING,
    youtubeId: DataTypes.STRING,
    lyrics: DataTypes.TEXT,
    tab: DataTypes.TEXT
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
  };
  return Song;
};

/*
  sequelize model:create --name Song --attributes 'title:string artist:string genre:string album:string albumImageUrl:string youtubeId:string lyrics:text tab:text'
*/
