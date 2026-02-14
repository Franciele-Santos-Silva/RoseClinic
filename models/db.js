const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("cadastro", "root", "!3675pfg45j", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Deu certo!!!");
  })
  .catch((erro) => {
    console.log("Ero ao conectar" + erro);
  });

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
