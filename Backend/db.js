const Sequelize = require("sequelize")
const sequelize = new Sequelize("lendingspace", "root", "lendingroot", {
    dialect: "mysql",
    host: "localhost",
    post: "3306"
})

module.exports = sequelize