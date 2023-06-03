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

create table historia (
  id int auto_increment,
  nome varchar(45),
  descricao varchar(10000),
  imagem varchar(255),
  fkUsuario int,
  foreign key (fkUsuario) references usuario(idUsuario),
  constraint pkid primary key (id, fkUsuario)
);

select * from historia;
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
idhistoriaEscolhida int primary key auto_increment,
nome varchar(45),
descricao varchar(10000),
nomeAutor varchar(45),
imagem varchar(255),
fkUsuario int,
constraint fkUsuario foreign key (fkUsuario) references usuario(idUsuario)
);

select * from historiaEscolhida;


select * from historiaEscolhida join usuario 
on fkUsuario = idUsuario; 

insert into historiaEscolhida values
(null, ' ','O Amarelo era um viralata e a gente pegou ele já grandinho pra cuidar, mas boatos q ele já era mimado pela vizinhança toda. Atualmente tem 16/17 aninhos e adora se enfiar em lugares que não pode. Quando eu era criança tinha a imaginação bem fértil e um dia quando eu tinha acabado de assistir "A casa monstro"  a noite, minha mãe me mandou ir pegar algo no cômodo lá de cima que eu sempre tive medo, foi quando eu comecei a escutar umas batidas na porta e olhei pra baixo e tinha patas muito peludas saindo pela frestinha da porta, fiquei desesperada achando q era um monstro mas tomei coragem e abri e o "monstro" na verdade era o Amarelo que tentou se esconder sem que a gente percebesse e acabou ficando trancado.','Maria Eduarda', '', 3);

