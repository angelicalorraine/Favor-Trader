const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Offer extends Model {}

Offer.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    date_offered: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
    },
    buyer_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    seller_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    transaction: {
        type: DataTypes.STRING,
        allowNull: false
    }
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'offer'
  }
);

module.exports = Offer;