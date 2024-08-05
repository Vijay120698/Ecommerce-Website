const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  'ecomerse',
  'postgres',
  'qwert@12',
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);

const db = {};

db.User = require('./user')(sequelize, DataTypes);
// db.LeaveRequest = require('./leaveRequest')(sequelize, DataTypes);
db.Details = require('./details')(sequelize, DataTypes);
db.Cart = require('./cart')(sequelize, DataTypes);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db




