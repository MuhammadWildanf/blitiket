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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Name is Required"
        },
        notNull: {
          args: true,
          msg: "Name is Required"
        }
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Location is Required"
        },
        notNull: {
          args: true,
          msg: "Location is Required"
        }
      },
    },
    eventDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Date is Required"
        },
        notNull: {
          args: true,
          msg: "Date is Required"
        }
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Name is Required"
        },
        notNull: {
          args: true,
          msg: "Name is Required"
        },
        min: {
          args: 1,
          msg: "price must greater than 0"
        }
      },
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Name is Required"
        },
        notNull: {
          args: true,
          msg: "Name is Required"
        },
        min: {
          args: 1,
          msg: "Capacity must greater than 0"
        }
      },
    },
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