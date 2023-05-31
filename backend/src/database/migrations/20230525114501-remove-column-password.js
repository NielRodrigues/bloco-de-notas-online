/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.removeColumn("users", "password");
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn("users", "password", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};
