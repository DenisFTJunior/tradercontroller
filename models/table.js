const db = require('./db')

const table = db.sequelize.define('GainsLoss', {
  day:{
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

table.sync({force:true})


module.exports.table = table
