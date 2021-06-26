const sequelize = require('../config/connection');
const { User, Favor, Trade } = require('../models');

const userData = require('./userData.json');
const favorData = require('./favorData.json');
const tradeData = require('./tradeData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const favor of favorData) {
    await Favor.create({
      ...favor,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }




  process.exit(0);
};

seedDatabase();