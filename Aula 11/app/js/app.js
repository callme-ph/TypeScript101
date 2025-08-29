// TUPLA
// Permite definir um Array com um número fixo de elementos e tipos diferentes.
// Arrays que recebem tipos físicos
var arr = [1, 2, 4];
var arr1 = ['teste', 'teste2'];
// Array que recebe qualquer tipo - any 
// Neste array uma posição onde há um number, é possível colocar outro tipo.
var arr2 = [1, 'teste', true];
// Declarando uma tupla
var t = ['nome', 10]; // Usando uma tupla, as variáveis em cada posição tem tipos 
// definidos que não podem ser mudados
t = ['tipo', 2]; // funciona
// t = ['tipo', 'tipo'] // não funciona
/* ENUMS */
// Cria objetos enumerados em orde. É possível definir uma numeração diferente para um objeto, porém,
// os objetos seguintes irão seguir a ordem.
var Cor;
(function (Cor) {
    Cor[Cor["Azul"] = 0] = "Azul";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Vermelho"] = 5] = "Vermelho";
    Cor[Cor["Marrom"] = 6] = "Marrom";
    Cor["SC"] = "SEM COR"; // é possível atribuir strings
})(Cor || (Cor = {}));
// let c = new Cor(); // Não funciona como uma classe com construtor
var a = Cor.Azul;
var v = Cor.Vermelho;
console.log(a, v); // 0 e 2
/* UNION */
// Permite usar mais de um tipo para uma variável ou parâmetro de função.
// A barra vertical define que o parâmetro da função só pode ser numérico ou string
function imprimirID(id) {
    console.log(id);
}
//imprimirID(123);
//imprimirID("123");
var x;
x = 1;
x = true;
x = "teste";
var aluno1 = {
    nome: "nome1",
    idade: 12
};
// E na função abaixo, ao invés de definir os parâmetros com o UNION, passa-se o tipo ID.
function imprimir(id /*id:number|string*/) {
    console.log(id);
}
// imprimir(123);
// imprimir("123");
/* CONVERSÃO DDE TIPOS */
