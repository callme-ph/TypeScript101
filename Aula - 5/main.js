"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClasseUsuario_1 = require("./ClasseUsuario");
var Turma_1 = require("./Turma");
var User1 = new ClasseUsuario_1.Usuario("Teste2"); // Criação do objeto
console.log(User1.nome);
var estudante1 = new ClasseUsuario_1.Usuario("Nome1");
var turma1 = new Turma_1.Turma();
console.log(turma1.estudantesTurma);
turma1.addEstudante = estudante1;
turma1.addEstudante = User1;
console.log(turma1);
console.log(turma1.estudantesTurma);
turma1.estudantesTurma[0].idade = 15;
turma1.estudantesTurma[0].nome = "Nome1";
turma1.estudantesTurma[1].idade = 25;
turma1.estudantesTurma[1].nome = "Nome2";
console.log(turma1);
console.log(turma1.estudantesTurma);
