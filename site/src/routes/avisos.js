var express = require("express");
var router = express.Router();
var avisoController = require("../controllers/avisoController");
const upload = require('../config/configUpload'); // ARQUIVO COM A COFIGURAÇÃO DO UPLOAD
const historiaController = require('../controllers/historiaController');

router.get("/", function (req, res) {
    avisoController.testar(req, res);
});
router.get('/:id', upload.single('foto'), (req, res) => {
    historiaController.buscarhistoriaPeloId(req, res);
  });
router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

router.put("/editar/:idAviso", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    avisoController.deletar(req, res);
});

module.exports = router;