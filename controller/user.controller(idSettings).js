// const db = require("../models");
// const TestPost = db.testPosts;
// const Op = db.Sequelize.Op;

// // 새 글 저장
// exports.create = (req, res) => {
//     // NULL값 유효성 검사 
//     if (!req.body.title) {
//       res.status(400).send({
//         message: "내용이 비어있습니다."
//       });
//       return;
//     }
  
//     // 요청받은 데이터 저장
//     const TestPost = {
//       title: req.body.title,
//       content: req.body.content,
//       published: req.body.published ? req.body.published : false
//     };
  
//     // 요청받은 데이터 DB에 추가
//     TestPost.create(testPost)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "테스트 게시물 생성 중 오류가 발생했습니다."
//         });
//       });
//   };

// // DB에서 모든 글 조회
// exports.findAll = (req, res) => {
//     const title = req.query.title;
//     // 요청받은 Title이 포함된 데이터 조회
//     var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  
//     TestPost.findAll({ where: condition })
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "데이터 검색중 이슈 발생"
//         });
//       });
//   };

// // ID값으로 단일 데이터 조회 
// exports.findOne = (req, res) => {
//     const id = req.params.id;
  
//     TestPost.findByPk(id)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: id + "번째 글을 검색하다 이슈 발생"
//         });
//       });
//   };

// // ID값 받고, 데이터 업데이트
// exports.update = (req, res) => {
//     const id = req.params.id;
  
//     TestPost.update(req.body, {
//       where: { id: id }
//     })
//       .then(num => {
//         if (num == 1) {
//           res.send({
//             message: "데이터 변경 성공"
//           });
//         } else {
//           res.send({
//             message: `${id}번째 글 업데이트 실패. => 데이터가 없던가 2개이상이여서`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: id + "번째 글 업데이트 실패."
//         });
//       });
//   };

// // ID값으로 데이터 삭제
// exports.delete = (req, res) => {
//     const id = req.params.id;
  
//     TestPost.destroy({
//       where: { id: id }
//     })
//       .then(num => {
//         if (num == 1) {
//           res.send({
//             message: "데이터 삭제됨"
//           });
//         } else {
//           res.send({
//             message: `${id}번째 글을 찾을수가 없습니다.`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: id + "번째 데이터 삭제 실패"
//         });
//       });
//   };

// // 모든 데이터 삭제
// exports.deleteAll = (req, res) => {
//     TestPost.destroy({
//       where: {},
//       truncate: false
//     })
//       .then(nums => {
//         res.send({ message: `${nums} 개의 데이터가 삭제되었다.` });
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "데이터 삭제 중 에러가 발생했습니다."
//         });
//       });
//   };

// // 공개된 데이터 조회
// exports.findAllPublished = (req, res) => {
//     TestPost.findAll({ where: { published: true } })
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "공개된 데이터 조회하다 에러발생"
//         });
//       });
//   };

//출처 https://github.com/Kyungseo-Park/NodePostgresSequelizercCORS