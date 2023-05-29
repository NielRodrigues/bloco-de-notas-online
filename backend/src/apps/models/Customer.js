import Sequelize, { Model } from "sequelize";
import config from "../../config/database";

const sequelize = new Sequelize(config);

class Customer extends Model {}

Customer.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    situacao: Sequelize.ENUM("ATIVO", "INATIVO"),
  },
  {
    sequelize,
  }
);

export default Customer;
