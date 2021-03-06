const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Role = sequelize.define('Role',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
        type: Sequelize.STRING(20),
        allowNull: false
    }
  }
);

module.exports = Role;