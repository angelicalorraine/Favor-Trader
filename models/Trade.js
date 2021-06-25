const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trade extends Model {}

Trade.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    date_traded: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
    },
    buyer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }, 
    seller_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }, 
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'trade'
  }
);

module.exports = Trade;