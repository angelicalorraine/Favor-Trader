const User = require('./User');
const Favor = require('./Favor');
const Trade = require('./Trade');

User.hasMany(Favor, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Favor.belongsTo(User, {
  foreignKey: 'user_id'
});
  
Trade.hasMany(Favor, {
  foreignKey: 'trade_id'
});

Favor.belongsTo(Trade, {
  foreignKey: 'trade_id'
});
  
module.exports = { User, Favor, Trade };