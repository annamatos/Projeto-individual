const historiaModel = require('../models/historiaModel');


function salvarHistoria(req, res) {
  const imagem = req.file.filename;
  const { nome, descricao, fkUsuario } = req.body

  const historia = { nome, descricao, imagem, fkUsuario }

  historiaModel.salvarHistoria(historia)
    .then(resultado => {
      res.status(201).send("historia criado com sucesso");
    }).catch(err => {
      res.status(500).send(err);
    });
}

function Historia(req, res) {
  const imagem = req.file.filename;
  const { nome, descricao, nomeAutor, fkUsuario } = req.body

  const historia = { nome, descricao, nomeAutor, imagem, fkUsuario }

  historiaModel.Historia(historia)
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

function exibirhistoriaPeloId(req, res) {
  console.log(req.params.id);
  historiaModel.exibirhistoriaPeloId(req.params.id)
    .then(resultado => {
      res.json(resultado);
    }).catch(err => {
      res.status(500).send(err);
    });
}

function contar(req, res) {
  // console.log(req.params.id);
  historiaModel.contar()
    .then(resultado => {
      res.json(resultado);
    }).catch(err => {
      res.status(500).send(err);
    });
}

function qntHist(req, res) {
  // console.log(req.params.id);
  historiaModel.qntHist()
    .then(function (resultado) {
      if (resultado.length > 0) {
          res.status(200).json(resultado);
      } else {
          res.status(204).send("Nenhum resultado encontrado!")
      }
  }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
  });
}

module.exports = { salvarHistoria, buscarhistoriaPeloId, exibirhistoriaPeloId, Historia, contar, qntHist } 