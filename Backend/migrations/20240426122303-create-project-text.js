'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('project_texts', {
      proj_text_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      project_id:{
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: "projects"
          },
          key: "project_id",
          primaryKey:true,
          allowNull:false,

        }
      },

      f_type_id:{
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: "form_types"
          },
          key: "f_type_id",
          primaryKey:false,
          allowNull:false,

        }
      },


      category: {
        type: Sequelize.STRING
      },

      title: {
        type: Sequelize.STRING
      },

      text:{
        type: Sequelize.TEXT('medium')
      },

      index:{
        type:Sequelize.INTEGER
      }
   
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('project_texts');
  }
};