'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',{
    nickname:{
      allowNull:false,
      type : DataTypes.STRING
    },
    password:{
      allowNull:false,
      type : DataTypes.STRING
    }
  },{
    tableName: 'users',
    timestamps: true
  });
  User.associate = function(models){

  };
  User.prototype.toJSON = function(){
    const values = Object.assign({}.this.get())

    return{
      id: values.id,
      nickname: values.nickname
    }
  }

  return User;
};