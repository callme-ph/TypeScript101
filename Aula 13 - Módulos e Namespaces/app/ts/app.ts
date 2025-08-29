// importar o namespace
// checar se o tsconfig está configurado com o outFile
// utilizar os métodos do namespace a partir do nome do namespace

/// reference path = "StringUtils.ts" />

//import { StringUtils } from "./StringUtils"

namespace Texto{

    function imprimir(texto: string){
        console.log(texto);
    }

    export function contarTexto(texto: string): number{
        return texto.length;
    }
}

console.log(StringUtils.maiuscula("Emerson"));
console.log(StringUtils.contarTexto("TEXTOGRANDE?"));

// Texto.imprimir("Emerson"); // Para usar o método imprimir, deve-se adicionar a palavra chave export á função
// console.log(Texto.contarTexto("Emerson"))

// let mensagem = "Oi!";


/* MÓDULO */
// Um módulo é a criação e exportação de uma classe/variável para que seja usada em outro arquivo. 
// Já vínhamos fazendo isto durante as aulas.

