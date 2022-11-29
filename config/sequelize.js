const { Sequelize, DataTypes, Model } = require('sequelize');
require('dotenv').config();

const connectionPoolOptions = {
  max: 300,
  idle: 30000,
  acquire: 60000,
};
const sequelize = new Sequelize(
  `${process.env.database}`,
  `${process.env.username}`,
  `${process.env.password}`,
  {
    host: `${process.env.host}`,
    dialect: 'mysql',
    pool: connectionPoolOptions,
    logging: false,
  }
);

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
const Profile = require('../models/profile')(sequelize, Model, DataTypes);
const Auth = require('../models/auth')(sequelize, Model, DataTypes);

// db.sequelize.sync();
Profile.hasOne(Auth, );
Auth.belongsTo(Profile, {
  foreignKey: 'id',
});


db.Profile = Profile;
db.Auth = Auth;
module.exports = db;
