"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(_nome, _autor, _editora, _ano) {
        this._nome = _nome;
        this._autor = _autor;
        this._editora = _editora;
        this._ano = _ano;
    }
    Object.defineProperty(Livro.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "autor", {
        get: function () {
            return this._autor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "editora", {
        get: function () {
            return this._editora;
        },
        enumerable: false,
        configurable: true
    });
    return Livro;
}());
exports.Livro = Livro;
