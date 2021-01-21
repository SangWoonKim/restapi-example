//이 모듈은 데이터를 관리하는 모듈
const models = require('../../models/v1/user.model');
const model = require('../../models/v1/index');
const seqeulize = require('sequelize');
//nickname password
module.exports.get = (req,res,next)=>{    //모듈 생성.get이라는 메소드를 생성
    try{
        //users에 배열을 객체 형식으로 생성
        const users=[
            {
                nickname: 'nickname_1',
                password: 'password_1'
            },
            {
                nickname: 'nickname_2',
                password: 'password_2'
            },
            {
                nickname: 'nickname_3',
                password: 'password_3'
            }
        ]
        return res.json(users)          //json형태로 반환
    }catch(err){
        next(err)
    }
}


module.exports.index12 = async (req,res)=>{
    
    
    const users = models.findAll() ({
        attribute:['nickname','password']
    });
    if(!users){
        throw("망함")
    }
    res.json(users);
    
    // models.User.findAll().then(function(results) {
    //     res.json(results);
    // }).catch(function(err) {
    //     //TODO: error handling
    //     return res.status(404).json({err: 'Undefined error!'});
    // });
}