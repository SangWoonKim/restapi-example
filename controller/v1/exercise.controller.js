//이 모듈은 exerciseTable데이터를 관리하는 모듈
//이 파일은 sequelize를 이용한 CRUD의 기본적인 기능을 구현
const models = require('../../models/v1/index');
const exercisemodel = models.exercisemodels;

//Read(select) 모든 데이터 읽기
module.exports.selectAll = async (req, res) => {

    try {
        exercisemodel.findAll().then(function (results) {
            res.json(results);
        })
    } catch (err) {
        //TODO: error handling
        return res.status(404).json({ err: 'import확인' });
    };
};

//부위별에 따라 데이터 검색
module.exports.selectPart = (req, res) => {
    const part = req.params.E_part;
    try {
        exercisemodel.findAll({
            where:{
                E_part: part
            }
        }).then(result => {
            res.json(result);
        })
    } catch (err) {
        return res.status(404).json({ err: 'import확인' });
    }
}

//id값을 받아 데이터 검색
module.exports.selectOne = (req, res) => {
    const name = req.params.E_name;
    try {
        exercisemodel.findAll({
            where:{
                E_name: name
            }
        }).then(result => {
            res.json(result);
        })
    } catch (err) {
        return res.status(404).json({ err: 'import확인' });
    }
}





