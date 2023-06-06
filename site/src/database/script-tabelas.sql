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
select * from usuario;
desc usuario;

create table historia (
  id int auto_increment,
  nome varchar(45),
  descricao varchar(10000),
  imagem varchar(255),
  fkUsuario int,
  foreign key (fkUsuario) references usuario(idUsuario),
  constraint pkid primary key (id, fkUsuario)
);


select historia.nome as titulo, historia.descricao as historia, usuario.nome as autor, imagem, fkUsuario from historia join usuario 
on fkUsuario = idUsuario; 
select count(nome) from historiaEscolhida;

select * from historia join usuario 
on fkUsuario = idUsuario; 

-- select para grafico de usuarios
select genero, count(genero) as qntgenero from usuario group by genero;

select count(genero) from usuario where genero = 'Não binário';
select count(genero) from usuario where genero = 'Feminino';
select count(genero) from usuario where genero = 'Masculino';

-- select para graficos de quantidade de pets dos usuarios
select count(qntPet) as usuariopet, qntPet from usuario group by qntPet order by usuariopet;              


select count(qntPet) from usuario where qntPet = '1';
select count(qntPet) from usuario where qntPet = '2';
select count(qntPet) from usuario where qntPet = '3';
select count(qntPet) from usuario where qntPet = '4+';
select count(qntPet) from usuario where qntPet = '0';


CREATE TABLE historiaEscolhida(
idhistoriaEscolhida int auto_increment,
nome varchar(45),
descricao varchar(10000),
nomeAutor varchar(45),
imagem varchar(255),
fkUsuario int,
constraint fkUsuario foreign key (fkUsuario) references usuario(idUsuario),
constraint pkhistoriaEscolhida primary key (idhistoriaEscolhida, fkUsuario)
);

select * from historiaEscolhida where idhistoriaEscolhida = 1 ;
select * from historiaEscolhida join usuario 
on fkUsuario = idUsuario;
select count(idhistoriaEscolhida) from historiaEscolhida;select count(idhistoriaEscolhida) from historiaEscolhida;

-- modificações bd
-- alter table usuario modify column qntPet varchar(10);
-- select idUsuario, qntPet from usuario where qntPet = 4; 
-- update usuario set qntPet ='4 pet' where idUsuario = 10;
