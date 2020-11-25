const db = require('./db')

const table = db.sequelize.define('GainsLoss', {
  day:{
    type: db.Sequelize.DATE
  },
  entrada:{
    type: db.Sequelize.FLOAT
  },
  porcentagem: {
    type:db.Sequelize.FLOAT
  },
  result:{
    type:db.Sequelize.STRING(20)
  },
  lucro: {
    type:db.Sequelize.FLOAT
  },
})

module.exports.table = table
