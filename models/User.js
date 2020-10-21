const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const User = sequelize.define('User',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    phone: {
      type: Sequelize.BIGINT,
      allowNull: false,
    }
  }
);

module.exports = User;