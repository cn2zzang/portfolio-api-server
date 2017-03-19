//데이터 베이스 관련 역할
// models.js
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    storage: 'db.sqlite',
    dialect: 'sqlite'
})

const User = sequelize.define('user', { //database 테이블
  name: {
    type: Sequelize.STRING,
    unique: true
  } //설정 객체 컬럼 결정 id는 자동으로 설정
});

module.exports = {sequelize, User}; //app.js 에서 가져다 써야하므로 모듈 exports 
//module.exports = {
//     sequelize: sequelize,
//     user: user
// };