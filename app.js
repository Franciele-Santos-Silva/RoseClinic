const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Produtos = require("./models/Produtos");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/cadastro", (req, res) => {
  Produtos.create({
    nome: req.body.nome,
    preco: req.body.preco,
    descricao: req.body.descricao,
  })
    .then(() => {
      res.send("Produto cadastrado com sucesso!!!");
    })
    .catch((erro) => {
      res.send("Erro ao cadastrar produto" + erro);
    });
});

app.listen(8081, () => {
  console.log("Rodando...");
});
