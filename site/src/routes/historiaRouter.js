const express = require('express');
const router = express.Router();
const upload = require('../config/configUpload'); // ARQUIVO COM A COFIGURAÇÃO DO UPLOAD
const historiaController = require('../controllers/historiaController');

// router.get("", (req, res) => {
//   res.render("index")
// });

// upload.single('foto') vai buscar no json alguma propriedade chamada foto 
router.post('/cadastrohistoria', upload.single('foto'), (req, res) => {
  historiaController.salvarHistoria(req, res);
});

router.post('/enviarhistoria', upload.single('foto'), (req, res) => {
  historiaController.Historia(req, res);
});

router.get('/:id', upload.single('foto'), (req, res) => {
  historiaController.buscarhistoriaPeloId(req, res);
});

router.get('/:idhistoriaEscolhida', upload.single('foto'), (req, res) => {
  historiaController.exibirhistoriaPeloId(req, res);
});

module.exports = router; 

