"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    // Com o tipo da variável sendo any é possível fazer uma "sobrecarga", onde o construtor recebe como parâmetros, variáveis de qualquer tipo  
    function Usuario(nome, idade) {
        this._idade = 0;
        this._nome = nome;
        if (typeof (idade) == 'number') {
            if (idade < 0) {
                this._idade = 0;
            }
            else {
                this._idade = idade;
            }
        }
        else {
            console.log(" Valor passado para idade n\u00E3o \u00E9 de um tipo v\u00E1lido. O tipo deve ser number e o passado foi ".concat(typeof (idade), "."));
            this._idade = 0;
        }
    }
    Usuario.prototype.exibirInformacoes = function () {
        console.log("Nome do usu\u00E1rio: ".concat(this._nome, " \nIdade do usu\u00E1rio: ").concat(this._idade, " \n"));
    };
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
        set: function (i) {
            if (i >= 0) {
                this._idade = i;
            }
            else {
                this._idade = 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Usuario;
}());
exports.Usuario = Usuario;
