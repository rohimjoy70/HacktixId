"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("Movies", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         title: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         description: {
            allowNull: false,
            type: Sequelize.TEXT,
         },
         year: {
            allowNull: false,
            type: Sequelize.INTEGER,
         },
         genre: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         posterUrl: {
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
      await queryInterface.dropTable("Movies");
   },
};
