'use strict';
// const { DataTypes, sequelize } = require('sequelize');
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
//     class Submission extends Model {}
// } 
class Submission extends Model {}
Submission.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
            {
            sequelize,
            modelName: 'Submission',
            tableName: 'submissions',
            timestamps: false
          });

return Submission; 
}
    
