const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserTrade extends Model {}

UserTrade.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    trade_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'trade',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_trade',
  }
);

module.exports = UserTrade;
