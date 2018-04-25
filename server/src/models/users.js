'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    email: {
      type: DataTypes.STRING(64),
      unique: true
    },
    password: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};
