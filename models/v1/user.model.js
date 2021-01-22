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
  //db json변환 로직 id와 nickname만 변환
  User.prototype.toJSON = function(){
    const values = Object.assign({},this.get())

    return{
      id: values.id,
      nickname: values.nickname
    }
  }

  return User;
};