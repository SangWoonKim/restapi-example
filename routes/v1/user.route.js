//localhost:3000/v1/users
const express = require('express');
const router = express.Router();
const controller = require('../../controller/v1/user.controller')

router.route('/').get(controller.get);                                       //지금 이 파일을 가리킬 경우 즉 localhost:3000/v1/users일 경우 controller에있는 get()함수를 이용하여 정보를 가져옴 return값 json

router.route('/index').get(controller.index12);
module.exports = router;                                    