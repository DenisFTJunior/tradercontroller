const db = require('./db')

const table = db.sequelize.define('GainsLoss', {
  week:{
    type: db.Sequelize.DATE
  },
  entrada:{
    type: db.Sequelize.FLOAT
  },
  resultado: {
    type:db.Sequelize.FLOAT
  },
  total : {
    type:db.Sequelize.FLOAT
  }
})

module.exports.table = table
