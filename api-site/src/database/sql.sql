create database garden;
use garden;

create table usuario (
idUser int auto_increment primary key,
nome varchar (100),
email varchar (50),
senha varchar (50),
dataNasc date,
genero varchar(13),
check (genero = 'm' or genero = 'f' or genero = 'nao informado'),
dataCadastro timestamp default current_timestamp
);

create table reclamacao (
idReclamacao int primary key auto_increment,
motivo varchar(20),
email_reclamacao varchar(45),
texto varchar(200),
dataReclamacao timestamp default current_timestamp 
);