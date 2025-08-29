"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
var ClasseUsuario_1 = require("./ClasseUsuario");
// A classe Professor herda os métodos públicos e protected da classe Usuário 
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(nome, materia, idade) {
        var _this = _super.call(this, nome, idade) || this;
        if (materia == undefined || materia == null) {
            _this._materia = "Sem materia cadastrada";
        }
        else {
            _this._materia = materia;
        }
        return _this;
    }
    Professor.prototype.exibirInformacoes = function () {
        // super.exibirInformacoes(); // Herança de método, é possível chamar o método da classe mãe - Usuário
        if (this._materia != undefined) {
            // Este método é o mesmo da super-classe, porém, a saída é outra. Isso é o polimorfismo.
            console.log("O nome do professor \u00E9 ".concat(this._nome, ", o professor tem ").concat(this._idade, " anos de idade e d\u00E1 aula de ").concat(this._materia));
        }
        ;
    };
    Object.defineProperty(Professor.prototype, "materia", {
        get: function () {
            return this._materia;
        },
        set: function (v) {
            this._materia = v;
        },
        enumerable: false,
        configurable: true
    });
    return Professor;
}(ClasseUsuario_1.Usuario));
exports.Professor = Professor;
