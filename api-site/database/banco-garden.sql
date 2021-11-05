create database garden;
use garden;

create table usuario (
idUser int auto_increment primary key,
nome varchar (100),
email varchar (50),
senha varchar (50),
dataNasc date,
genero varchar (13),
check (genero = 'f' or genero = 'm' or genero = 'não informado'),
);
