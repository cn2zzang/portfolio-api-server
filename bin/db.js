const models = require('../models');

const sync = () => {
  return models.sequelize.sync({force: true});
}

module.exports  = {sync};
