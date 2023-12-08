const { Sequelize, DataTypes } = require('sequelize');
const database = require("../db")

const User = database.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING
  }
});

User.hasMany(Item, { as: 'lendables', foreignKey: 'IdDono' });
User.hasMany(Lending, { as: 'lends', foreignKey: 'IdMutuario' });

module.exports = User;