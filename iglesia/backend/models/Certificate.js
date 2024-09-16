const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Certificate = sequelize.define('Certificate', {
  // Define aquí los campos necesarios para los certificados
  bookNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pageNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  confirmationDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  confirmandName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  run: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  birthPlace: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fatherName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  motherName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sponsor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  certifier: {
    type: DataTypes.STRING,
    allowNull: false
  },
  note: {
    type: DataTypes.STRING,
    allowNull: true
  },
  issueDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = Certificate;
