const app = require('../app');
const db = require('./db');
const config = require('../config/env');

db.sync({force: config.db.isForce}).then(_=>{
  console.log('디비 싱크 완료');

  app.listen(3000, () => {
    console.log(`Run at http://localhost:3000`)
  });
});
