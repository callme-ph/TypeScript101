"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClasseUsuario_1 = require("./ClasseUsuario");
var Turma_1 = require("./Turma");
var Professor_1 = require("./Professor");
var Estudante_1 = require("./Estudante");
var professor1 = new Professor_1.Professor("Nome", null, -55);
var User1 = new ClasseUsuario_1.Usuario("Teste2"); // Criação do objeto
var estudante1 = new Estudante_1.Estudante("Nome1", -2);
var turma1 = new Turma_1.Turma();
professor1.materia = "Geo";
turma1.addEstudante = professor1;
turma1.addEstudante = estudante1;
turma1.addEstudante = User1;
turma1.estudantesTurma[0].idade = -15;
turma1.estudantesTurma[0].nome = "Nome1";
turma1.estudantesTurma[1].idade = -25;
turma1.estudantesTurma[1].nome = "Nome2";
for (var i = 0; i < turma1.estudantesTurma.length; i++) {
    console.log("".concat(i, "\n"));
    console.log(turma1.estudantesTurma[i].exibirInformacoes());
}
