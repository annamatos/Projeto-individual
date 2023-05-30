const express = require('express');
const router = express.Router();
const upload = require('../config/configUpload'); // ARQUIVO COM A COFIGURAÇÃO DO UPLOAD
const historiaController = require('../controllers/historiaController');

// router.get("", (req, res) => {
//   res.render("index")
// });

// upload.single('foto') vai buscar no json alguma propriedade chamada foto 
router.post('/cadastro', upload.single('foto'), (req, res) => {
  historiaController.salvarHistoria(req, res);
});

router.get('/:id', upload.single('foto'), (req, res) => {
  historiaController.buscarhistoriaPeloId(req, res);
});

module.exports = router;

