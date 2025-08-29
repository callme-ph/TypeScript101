import { Usuario } from './ClasseUsuario'
import { Turma } from './Turma';

let User1 = new Usuario("Teste2"); // Criação do objeto

console.log(User1.nome);

let estudante1 = new Usuario("Nome1");

let turma1 = new Turma();

console.log(turma1.estudantesTurma)

turma1.addEstudante = estudante1;
turma1.addEstudante = User1; 

console.log(turma1)
console.log(turma1.estudantesTurma)

turma1.estudantesTurma[0].idade = 15;
turma1.estudantesTurma[0].nome = "Nome1"

turma1.estudantesTurma[1].idade = 25;
turma1.estudantesTurma[1].nome = "Nome2"

console.log(turma1)
console.log(turma1.estudantesTurma)