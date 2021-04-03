// ex)localhost:3000/v1
const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{                            //자기자신을 가리킬 경우 지금 폴더의 위치가 v1임 즉 ex)localhost:3000/v1일 경우 
    return res.json({'message':'v1 folder'});               //json 반환
})

router.use('/users',require('./user.route'));                //ex) localhost:3000/v1/users일 경우 user.route.js를 실행

router.use('/exercise',require("./exercise.route"))
module.exports = router;                                    //모듈화