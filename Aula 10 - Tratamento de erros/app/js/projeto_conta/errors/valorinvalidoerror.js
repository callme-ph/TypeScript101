"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValorInvalidoError = void 0;
// Implementação de erro, ao usar implements é necessáraio 
var ValorInvalidoError = /** @class */ (function () {
    function ValorInvalidoError(message, valorInvalido) {
        this.name = 'ValorInvalidoError';
        this.message = "".concat(this.name, ": ").concat(message);
        this._valorInvalido = valorInvalido;
    }
    Object.defineProperty(ValorInvalidoError.prototype, "valorInvalido", {
        get: function () {
            return this._valorInvalido;
        },
        enumerable: false,
        configurable: true
    });
    return ValorInvalidoError;
}());
exports.ValorInvalidoError = ValorInvalidoError;
