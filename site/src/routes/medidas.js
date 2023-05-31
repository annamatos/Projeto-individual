var express = require("express");
var router = express.Router();
var router2 = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

// router.get("/tempo-real/:idUsuario", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// })

// segundo grafico

router.get("/primeiras/:idUsuario", function (req, res) {
    medidaController.buscarprimeirasMedidas(req, res);
});

// router.get("/tempo-real2/:idUsuario", function (req, res) {
//     medidaController.buscarMedidas2EmTempoReal(req, res);
// })

module.exports = router;