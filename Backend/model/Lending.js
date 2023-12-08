const { Sequelize, DataTypes } = require('sequelize');
const database = require("../db")


const Lending = database.define('Lending', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  IdDono: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  IdMutuario: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  dataDevolucao: {
    type: DataTypes.DATE,
    allowNull: false
  },
  emAtraso: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

Lending.belongsTo(User, { foreignKey: 'IdDono', as: 'owner' });
Lending.belongsTo(User, { foreignKey: 'IdMutuario', as: 'borrower' });

module.exports = Lending;