"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    // A interrogação indica que o parâmetro não é obrigatório, por isso, deve ser tratado no construtor.
    function Usuario(nome, idade) {
        this._nome = nome;
        if (idade == undefined) {
            this._idade = 0;
        }
        else {
            this._idade = idade;
        }
    }
    Object.defineProperty(Usuario.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (userName) {
            this._nome = userName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (userName) {
            this._idade = userName;
        },
        enumerable: false,
        configurable: true
    });
    return Usuario;
}());
exports.Usuario = Usuario;
