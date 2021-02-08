//이 모듈은 데이터를 관리하는 모듈
//이 파일은 sequelize를 이용한 CRUD의 기본적인 기능을 구현
const models = require('../../models/v1/index');
const usermodels = models.usermodels;

//nickname password
module.exports.get = (req, res, next) => {    //모듈 생성.get이라는 메소드를 생성
    try {
        //users에 배열을 객체 형식으로 생성
        const users = [
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
    } catch (err) {
        next(err)
    }
};

//Read(select) 모든 데이터 읽기
module.exports.index = async (req, res) => {

    try {
        usermodels.findAll().then(function (results) {
            res.json(results);
        })
    } catch (err) {
        //TODO: error handling
        return res.status(404).json({ err: 'import확인' });
    };
};

//id값을 받아 데이터 검색
module.exports.selectOne = (req, res) => {
    const id = req.params.id;


    try {
        usermodels.findByPk(id).then(result => {
            res.json(result);
        })
    } catch (err) {
        return res.status(404).json({ err: 'import확인' });
    }
}

//create(insert) nickname과 password insert
module.exports.create = (req, res) => {
    //NULL값 검사
    if (!req.body.nickname) {
        res.status(400).json({
            '에러': 'nickname을 입력하세요'
        });
        return;
    } else if (!req.body.password) {
        res.status(400).json({
            '에러': 'password을 입력하세요'
        })
    }

    //요청받은 데이터 저장(body)
    const Userdata = {
        nickname: req.body.nickname,
        password: req.body.password
    };

    //요청받은 데이터 DB에 추가 삽입 시점
    usermodels.create(Userdata).then(result => {
        res.json(result);
        console.log(result);
    })
        .catch(err => {
            res.status(500).json({
                '에러내용': 'db에 추가되지 않았습니다'
            });
        });
};

//update nickname값 받고, 해당 데이터 갱신
module.exports.update = (req, res) => {
    //라우터의 쿼리스트링에서 받은 값 추출(params)하여 저장
    const nickname = req.params.nickname
    const nicknameParam = req.params.nicknameParam;

    console.log(nickname);
    console.log(nicknameParam);

    //갱신 시점 if문을 추가하여 중복시 에러코드 발생하는 루틴 삽입해야함
    usermodels.update({ nickname: nicknameParam },   //set
        {
            where: { nickname: nickname }                 //where
        })
        //update의 반환값을 바뀐행이 아닌 바뀐행의 정보를 나타내게 함
        .then(() => {
            return usermodels.findOne({ where: { nickname: nicknameParam } })
                .then(result => res.json(result))
                .catch(err => {
                    res.status(500).json({
                        '실패': '정보조회 실패'
                    })
                })
        })
        // .then(resultRowNum=>{
        //     res.json({

        //         '성공':` ${nickname}에서${nicknameParam}으로 갱신 성공`,
        //         '갱신한 행의 개수':`${resultRowNum}개의 행이 업데이트`
        //     });
        // }
        // )
        .catch(err => {
            res.status(500).json({
                '실패': '업데이트 실패'
            })
        })
};


//delete nickname값으로 데이터 삭제
module.exports.delete = (req, res) => {
    //라우터의 쿼리스트링에서 받은 값 추출(params)하여 저장
    const nicknameParam = req.params.nickname;

    //삭제 시점 if문을 추가하여 중복시 에러코드 발생하는 루틴 삽입해야함
    usermodels.destroy({
        where: { nickname: nicknameParam }
    }).then(resultRowNum => {
        res.json({
            '성공': `${nicknameParam}의 nickname삭제`,
            '삭제한 행의 개수': `${resultRowNum}개의 행 삭제`
        });
    });
};