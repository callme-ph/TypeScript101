"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NomeInvalidoError = void 0;
var NomeInvalidoError = /** @class */ (function () {
    function NomeInvalidoError() {
        this.name = "NomeInvalidoError";
        this.message = "Nome inválido";
    }
    NomeInvalidoError.prototype.toString = function () {
        return "".concat(this.name, " : ").concat(this.message, " ");
    };
    return NomeInvalidoError;
}());
exports.NomeInvalidoError = NomeInvalidoError;
