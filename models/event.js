'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.belongsToMany(models.User, { through: 'Bookings' });
      Event.belongsTo(models.Category)
    }
  }
  Event.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    eventDate: DataTypes.DATE,
    price: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    CategoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Categories',
        },
        key: 'id'
      },
      allowNull: false
    },
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};