// /config/seqeulize.json 파일의 설정 값을 읽어 sequelize를 생성
// models 폴더 아래에 존재하는 js 파일을 모두 로딩
// db 객체에 Model을 정의하여 반환
//Model은 항상 최근에 적용시킨 Migration 파일과 구조가 동일 하여야 정상적으로 접근이 가능.

'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../configs/sequelize.json')[env];
//db객체 생성
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config,{
    pool:{
      max: 100,
      min: 0,
      idle: 10000
    }
  });
}

fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-9) === 'model.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file))
    (sequelize, 
      Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.usermodels = require("./user.model.js")(sequelize,Sequelize.DataTypes);
db.exercisemodels = require("./exercise.model.js")(sequelize,Sequelize.DataTypes);

module.exports = db;
