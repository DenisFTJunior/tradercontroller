//Acess port to databank
const Sequelize = require ('sequelize')
const sequelize = new Sequelize('data','root','mapaju5077',{
  host: 'localhost',
  dialect: 'mysql'
})

module.exports={
    Sequelize: Sequelize,
    sequelize: sequelize
}
