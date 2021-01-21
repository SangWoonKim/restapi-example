//db에 더미 데이터를 넣는 파일
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let datas =[];
    for(let i = 0; i<10; i++){
      let obj={
        nickname: "test_nickname-" +i,
        password: "1234",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      datas.push(obj); //datas배열에 obj객체들을 넣음
    }
    return queryInterface.bulkInsert('users',datas,{});
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
