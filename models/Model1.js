const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Location model
class Model1 extends Model { }

// create fields/columns for  model
Model1.init(
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
        modelName: 'Model1',
    });

module.exports = Model1;
