//localhost:3000/v1/users
//이렇게 라우팅을 나눈 이유는 예제할 때 편하게 하려고
const express = require('express');
const router = express.Router();
const controller = require('../../controller/v1/user.controller')

router.route('/').get(controller.get);                                       //지금 이 파일을 가리킬 경우 즉 localhost:3000/v1/users일 경우 controller에있는 get()함수를 이용하여 정보를 가져옴 return값 json

router.route('/index').get(controller.index);

router.route('/create').post(controller.create);

router.route('/update/:nickname/:nicknameParam').put(controller.update);

router.route('/delete/:nickname').delete(controller.delete);

router.route('/index/:id').get(controller.selectOne);

router.route('/update/:nickname/:nicknameParam').patch(controller.update);

router.route('/login').post(controller.login);
module.exports = router;                                    