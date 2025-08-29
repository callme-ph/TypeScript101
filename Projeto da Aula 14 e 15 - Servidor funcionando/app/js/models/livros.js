System.register([], function (exports_1, context_1) {
    "use strict";
    var Livros;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            // A classe livros ira receber os livros cadastrados e armazená-los em um Array.
            Livros = class Livros {
                constructor() {
                    this._livros = [];
                }
                adicionar(livro) {
                    this._livros.push(livro);
                }
                exibirLivros() {
                    return this._livros;
                }
            };
            exports_1("Livros", Livros);
        }
    };
});
