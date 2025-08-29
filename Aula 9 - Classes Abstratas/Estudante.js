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
exports.Estudante = void 0;
var ClasseUsuario_1 = require("./ClasseUsuario");
var Estudante = /** @class */ (function (_super) {
    __extends(Estudante, _super);
    function Estudante(nome, _serie) {
        var _this = _super.call(this, nome) || this;
        if (_serie == undefined || _serie < 0) {
            _this.serie = 0;
        }
        else {
            _this.serie = _serie;
        }
        return _this;
    }
    Estudante.prototype.exibirInformacoes = function () {
        console.log("Nome do estudante \u00E9 ".concat(this._nome, ", o estudante tem ").concat(this._idade, " anos de idade e \u00E9 do ").concat(this.serie, "\u00BA ano. \n"));
    };
    return Estudante;
}(ClasseUsuario_1.Usuario));
exports.Estudante = Estudante;
