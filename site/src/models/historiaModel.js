const database = require("../database/config");

function salvarHistoria(historia) {
  const instrucao = `insert into historia (nome, descricao, imagem, fkUsuario) values ('${historia.nome}', '${historia.descricao}', '${historia.imagem}','${historia.fkUsuario}')`;

  return database.executar(instrucao);
}

function Historia(historia) {
  const instrucao = `insert into historiaEscolhida (nome, descricao, nomeAutor, imagem, fkUsuario) values ('${historia.nome}', '${historia.descricao}', '${historia.nomeAutor}','${historia.imagem}','${historia.fkUsuario}')`;

  return database.executar(instrucao);
}

function buscarhistoriaPeloId(id) {
  const instrucao = `select historia.nome as titulo, historia.descricao as historia, usuario.nome as autor, imagem, fkUsuario from historia join usuario 
  on fkUsuario = idUsuario where id = ${id}`;

  return database.executar(instrucao);
}

function exibirhistoriaPeloId(id) {
  const instrucao = `
  select * from historiaEscolhida where idhistoriaEscolhida = ${id}`;

  return database.executar(instrucao);
}

function contar() {
  const instrucao = `
  select count(nome) as quant from historiaEscolhida;`;

  return database.executar(instrucao);
}
function qntHist() {
  const instrucao = `
  select count(id) as count from historia;`;

  return database.executar(instrucao);
}

module.exports = { salvarHistoria, buscarhistoriaPeloId, exibirhistoriaPeloId, Historia, contar, qntHist } 