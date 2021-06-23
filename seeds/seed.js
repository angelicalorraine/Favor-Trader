const sequelize = require('../config/connection');
const { User, Favor, Trade, Offer } = require('../models');

const userData = require('./userData.json');
const favorData = require('./favorData.json');
const tradeData = require('./tradeData.json');
const offerData = require('./offerData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData);
  const favors = await Favor.bulkCreate(favorData);
  const trade = await Trade.bulkCreate(tradeData);
  const offer = await Offer.bulkCreate(offerData);

  process.exit(0);
};

seedDatabase();