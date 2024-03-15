"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class WatchLists extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         WatchLists.belongsTo(models.User, { foreignKey: "userId" });
         WatchLists.belongsTo(models.Movies, { foreignKey: "movieId" });
      }
   }
   WatchLists.init(
      {
         userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
               notEmpty: {
                  msg: "userId is required",
               },
               notNull: {
                  msg: "userId is required",
               },
            },
         },
         movieId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
               notEmpty: {
                  msg: "movieId is required",
               },
               notNull: {
                  msg: "movieId is required",
               },
            },
         },
         status: {
            type: DataTypes.STRING,
            defaultValue: "not watched",
         },
      },
      {
         sequelize,
         modelName: "WatchLists",
      }
   );
   return WatchLists;
};
