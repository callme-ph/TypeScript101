var Exemplo;
(function (Exemplo) {
    var mensagem;
})(Exemplo || (Exemplo = {}));
var StringUtils;
(function (StringUtils) {
    var tamanhoMaximo = 10;
    function maiuscula(texto) {
        return texto.toUpperCase();
    }
    StringUtils.maiuscula = maiuscula;
    function minusculo(texto) {
        return texto.toLowerCase();
    }
    StringUtils.minusculo = minusculo;
    function contarTexto(params) {
        return params.length <= tamanhoMaximo;
    }
    StringUtils.contarTexto = contarTexto;
})(StringUtils || (StringUtils = {}));
// importar o namespace
// checar se o tsconfig está configurado com o outFile
// utilizar os métodos do namespace a partir do nome do namespace
/// reference path = "StringUtils.ts" />
//import { StringUtils } from "./StringUtils"
var Texto;
(function (Texto) {
    function imprimir(texto) {
        console.log(texto);
    }
    function contarTexto(texto) {
        return texto.length;
    }
    Texto.contarTexto = contarTexto;
})(Texto || (Texto = {}));
console.log(StringUtils.maiuscula("Emerson"));
console.log(StringUtils.contarTexto("TEXTOGRANDE?"));
// Texto.imprimir("Emerson"); // Para usar o método imprimir, deve-se adicionar a palavra chave export á função
// console.log(Texto.contarTexto("Emerson"))
// let mensagem = "Oi!";
/* MÓDULO */
// Um módulo é a criação e exportação de uma classe/variável para que seja usada em outro arquivo. 
// Já vínhamos fazendo isto durante as aulas.
