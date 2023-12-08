const { Sequelize, DataTypes } = require('sequelize');
const database = require("../db")

const Item = database.define('Item', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  categoria: {
    type: DataTypes.STRING
  },
  descricao: {
    type: DataTypes.STRING
  }
});

Item.belongsTo(User, { foreignKey: 'IdDono' });

module.exports = Item;