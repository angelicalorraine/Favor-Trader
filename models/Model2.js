const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Traveller model
class Model2 extends Model { }

// create fields/columns for Traveller model
Model2.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Model2',
    });

module.exports = Model2;
