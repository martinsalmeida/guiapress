const express = require("express");
const router = express.Router();

router.get("/categories", (req, res) => {
  res.send("Rota de Categorias");
});

router.get("/admin/categories/new", (req, res) => {
  res.send("Rota para criar noca categoria");
});

module.exports = router;
