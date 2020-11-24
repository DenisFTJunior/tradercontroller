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
    type:db.Sequelize.STRING 
  }
})

module.exports.table = table
