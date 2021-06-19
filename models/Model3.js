const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Trip model
class Model3 extends Model { }

// create fields/columns for Traveller model
Model3.init(
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
        modelName: 'Model3',
    });


module.exports = Model3;
