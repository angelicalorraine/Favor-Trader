const sequelize = require('../config/connection');
const { User, Favor, Trade } = require('../models');

const userData = require('./userData.json').map(a => ({...a, skills: JSON.stringify(a.skills)}));
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

 const trades = await Trade.bulkCreate(tradeData);


  process.exit(0);
};

seedDatabase();