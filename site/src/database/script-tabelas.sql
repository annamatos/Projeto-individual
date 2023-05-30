CREATE DATABASE projetoindividual;
USE projetoindividual;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    dtNasc date,
    genero varchar(20), constraint chkGenero check (genero in ('Feminino', 'Masculino', 'Não binário')),
    qntPet int,
	email VARCHAR(50) unique not null, constraint chkEmail CHECK (email like '%@%'),
	senha VARCHAR(50) not null
);

CREATE TABLE pet(
idPet int primary key auto_increment,
nome VARCHAR(50) not null,
dtNasc date,
tipo VARCHAR(50),
raça VARCHAR(50),
fkUsuario int,
constraint fkUsuario foreign key (fkUsuario) references usuario(idUsuario)
);


create table historia (
  id int primary key auto_increment,
  nome varchar(45),
  descricao varchar(10000),
  imagem varchar(255)
);


select * from historia;

-- drop table historia;