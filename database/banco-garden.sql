create database garden;
use garden;

create table usuario (
idUser int auto_increment primary key,
nome varchar (100),
email varchar (50),
dataNasc date,
genero varchar (13),
check (genero = 'f' or genero = 'm' or genero = 'não informado'),
tipoAtualizacao varchar(45),
check (tipoAtualizacao = 'diariamente' or tipoAtualizacao = 'quinzenalmente' or tipoAtualizacao = 'semanalmente')
);

create table materia (
idMateria int auto_increment primary key,
titulo varchar(45),
dataPubli date
);
