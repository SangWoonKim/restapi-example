//router에 정의된 url을 통해 값에 대한 분기처리
//localhost:3000/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { //ex localhost:3000/일때
  res.json({"index":"Express"});            //json형식으로 객체 반환
});

router.use('/v1',require('./v1'));        //ex localhost:3000/v1으로 url이 요청이 들어왔을 때 하위 폴더의 index파일 탐색

module.exports = router;
