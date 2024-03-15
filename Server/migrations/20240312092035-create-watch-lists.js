"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("WatchLists", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         userId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
               model: "Users",
               key: "id",
            },
         },
         movieId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
               model: "Movies",
               key: "id",
            },
         },
         status: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
      });
   },
   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("WatchLists");
   },
};
