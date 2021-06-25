const sequelize = require('../config/connection');
const { User, Favor, Trade } = require('../models');

const userData = require('./userData.json');
const favorData = require('./favorData.json');
const tradeData = require('./tradeData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData);
  const favors = await Favor.bulkCreate(favorData);
  const trades = await Trade.bulkCreate(tradeData);

  process.exit(0);
};

seedDatabase();