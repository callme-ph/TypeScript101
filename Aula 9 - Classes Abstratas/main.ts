import { Usuario } from './ClasseUsuario'
import { Turma } from './Turma';
import { Professor } from './Professor';
import { Estudante } from './Estudante';

let professor1:Usuario = new Professor("Nome", null ,-55)
let User1:Usuario = new Estudante("Teste2");
let estudante1 = new Estudante("Nome1",-2);

let turma1 = new Turma();

turma1.addEstudante = professor1
turma1.addEstudante = estudante1;
turma1.addEstudante = User1; 

turma1.estudantesTurma[0].idade = -15;
turma1.estudantesTurma[0].nome = "Nome1"

turma1.estudantesTurma[1].idade = -25;
turma1.estudantesTurma[1].nome = "Nome2"

for ( let i = 0; i < turma1.estudantesTurma.length; i++){
    console.log(`${i}\n`);
    //console.log(turma1.estudantesTurma[i].exibirInformacoes())
}

