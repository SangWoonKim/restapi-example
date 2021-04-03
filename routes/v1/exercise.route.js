//localhost:3000/v1/exercise
const express = require('express');
const router = express.Router();
const controller = require('../../controller/v1/exercise.controller')
//지금 이 파일을 가리킬 경우 즉 localhost:3000/v1/exercise일 경우 controller에있는 get()함수를 이용하여 정보를 가져옴 return값 json

router.route('/').get(controller.selectAll);                                       

router.route('/index/:E_part').get(controller.selectPart);

router.route('/index/:E_name').get(controller.selectOne);

// router.route('/login').post(controller.login);
module.exports = router;                                    