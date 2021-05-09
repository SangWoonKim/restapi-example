'use strict';

module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('exercises',{
    E_part:{
      allowNull:false,
      type : DataTypes.STRING
    },
    E_name:{ 
      allowNull:false,
      type : DataTypes.STRING
    },
    E_setcal:{
        allowNull:false,
        type : DataTypes.INTEGER
    },
    E_image:{ 
      allowNull:false,
      type : DataTypes.STRING
    },
    E_imageorg:{ 
        allowNull:false,
        type : DataTypes.STRING
    },
    E_activeimg:{ 
        allowNull:false,
        type : DataTypes.STRING
    },
    E_activeimg2:{ 
        allowNull:false,
        type : DataTypes.STRING
    }
  },{
    tableName: 'exercises',
    timestamps: true
  });
  Exercise.associate = function(models){

  };
  //db json변환 로직 id와 nickname만 변환
  Exercise.prototype.toJSON = function(){
    const values = Object.assign({},this.get())

    //id와 nickname만 출력
    return{
      E_part: values.E_part,
      E_name: values.E_name,
      E_setcal: values.E_setcal,
      E_image: values.E_image,
      E_imageorg: values.E_imageorg,
      E_activeimg: values.E_activeimg,
      E_activeimg2: values.E_activeimg2,
    }
  }

  return Exercise;
};