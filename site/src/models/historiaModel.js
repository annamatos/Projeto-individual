const database = require("../database/config");

function salvarHistoria(historia) {
  const instrucao = `insert into historia (nome, descricao, imagem) values ('${historia.nome}', '${historia.descricao}', '${historia.imagem}')`;

  return database.executar(instrucao);
}

function buscarhistoriaPeloId(id) {
  const instrucao = `select * from historia where id = ${id}`;

  return database.executar(instrucao);
}

module.exports = { salvarHistoria, buscarhistoriaPeloId }