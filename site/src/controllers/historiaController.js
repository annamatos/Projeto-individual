const historiaModel = require('../models/historiaModel');


function salvarHistoria(req, res) {
  const imagem = req.file.filename;
  const {nome, descricao, fkUsuario} = req.body

  const historia = { nome, descricao, imagem, fkUsuario }
  
  historiaModel.salvarHistoria(historia)
  .then(resultado => {
    res.status(201).send("historia criado com sucesso");
  }).catch(err => {
    res.status(500).send(err);
  });
}

function buscarhistoriaPeloId(req, res) {
  console.log(req.params.id);
  historiaModel.buscarhistoriaPeloId(req.params.id)
  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500).send(err);
  });
}

module.exports = { salvarHistoria, buscarhistoriaPeloId }