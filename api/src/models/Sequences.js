const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Sequences', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull:false,
      defaultValue: DataTypes.UUIDV4,
    },
    chain:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    countsequence:{
      type:DataTypes.INTEGER,
      allowNull: true,
    },
    countnosequence:{
      type:DataTypes.INTEGER,
      allowNull: true,
    }
  });
};