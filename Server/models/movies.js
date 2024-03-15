"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
   class Movies extends Model {
      static associate(models) {
         Movies.hasMany(models.WatchLists, { foreignKey: "movieId" });
      }
   }
   Movies.init(
      {
         title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               notEmpty: {
                  msg: "Title cannot be empty",
               },
               notNull: {
                  msg: "Title cannot be null",
               },
            },
         },
         description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
               notEmpty: {
                  msg: "Description cannot be empty",
               },
               notNull: {
                  msg: "Description cannot be null",
               },
            },
         },
         year: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
               notEmpty: {
                  msg: "Year cannot be empty",
               },
               notNull: {
                  msg: "Year cannot be null",
               },
            },
         },
         genre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               notEmpty: {
                  msg: "Genre cannot be empty",
               },
               notNull: {
                  msg: "Genre cannot be null",
               },
            },
         },
         posterUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               notEmpty: {
                  msg: "Poster URL cannot be empty",
               },
               notNull: {
                  msg: "Poster URL cannot be null",
               },
            },
         },
      },
      {
         sequelize,
         modelName: "Movies",
      }
   );
   return Movies;
};
