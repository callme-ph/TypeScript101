// TUPLA
// Permite definir um Array com um número fixo de elementos e tipos diferentes.

// Arrays que recebem tipos físicos
let arr = [1, 2, 4] 
let arr1 = ['teste', 'teste2']

// Array que recebe qualquer tipo - any 
// Neste array uma posição onde há um number, é possível colocar outro tipo.
let arr2 = [1, 'teste', true]

// Declarando uma tupla
let t:[string, number] = ['nome', 10]; // Usando uma tupla, as variáveis em cada posição tem tipos 
// definidos que não podem ser mudados

t = ['tipo', 2] // funciona
// t = ['tipo', 'tipo'] // não funciona

/* ENUMS */ 

// Cria objetos enumerados em orde. É possível definir uma numeração diferente para um objeto, porém,
// os objetos seguintes irão seguir a ordem.
enum Cor{
    Azul, // posição 0
    Verde, // posição 1
    Vermelho = 5, // posição 5
    Marrom, // posição 6
    SC = "SEM COR" // é possível atribuir strings
}

// let c = new Cor(); // Não funciona como uma classe com construtor
let a = Cor.Azul;
let v:Cor = Cor.Vermelho

console.log(a, v) // 0 e 2

/* UNION */
// Permite usar mais de um tipo para uma variável ou parâmetro de função.

// A barra vertical define que o parâmetro da função só pode ser numérico ou string
function imprimirID(id:number|string){ 
    console.log(id)

}

//imprimirID(123);
//imprimirID("123");

let x: number | boolean | string;

x = 1;
x = true;
x = "teste";

/* TYPE ALIAS */
// Permite criar novos tipos atribuindo apelidos para tipos existentes.

type Aluno = {
    nome: string;
    idade: number;
}

let aluno1:Aluno = {
    nome: "nome1",
    idade: 12
}

/* EXEMPLO 2 */

type ID = number | string; // Define que o tipo ID só pode ser numérico ou string
// E na função abaixo, ao invés de definir os parâmetros com o UNION, passa-se o tipo ID.
function imprimir(id: ID /*id:number|string*/){  
    console.log(id)

}

// imprimir(123);
// imprimir("123");


/* CONVERSÃO DDE TIPOS */

 