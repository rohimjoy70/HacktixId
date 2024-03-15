"use strict";
const { Model } = require("sequelize");
const { hashPass } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
   class User extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         User.hasMany(models.WatchLists, { foreignKey: "userId" });
      }
   }
   User.init(
      {
         email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
               msg: "Email already taken",
            },
            validate: {
               notNull: {
                  msg: "Email cannot be empty",
               },
               notEmpty: {
                  msg: "Email cannot be empty",
               },
               isEmail: {
                  msg: "Invalid email format",
               },
            },
         },
         password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               notNull: {
                  msg: "Password cannot be empty",
               },
               notEmpty: {
                  msg: "Password cannot be empty",
               },
            },
         },
      },
      {
         sequelize,
         modelName: "User",
      }
   );
   User.beforeCreate((user) => {
      user.password = hashPass(user.password);
   });
   return User;
};
