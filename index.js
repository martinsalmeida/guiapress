const express = require("express");
const app = express();
const connection = require("./database/database");
const categoriesController = require("./categories/CategoriesController");
const articlesControoler = require("./articles/articlesController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");

//View engine
app.set("view engine", "ejs");

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Static
app.use(express.static("public"));

//Database
connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com sucesso");
  })
  .catch(error => {
    console.log(error);
  });

app.use("/", categoriesController);

app.use("/", articlesControoler);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8000, () => {
  console.log("Servidor está rodando");
});
