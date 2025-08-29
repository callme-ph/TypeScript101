"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaldoInsuficienteError = void 0;
var SaldoInsuficienteError = /** @class */ (function () {
    function SaldoInsuficienteError(message, saldoDisponivel) {
        this.name = 'SaldoInsuficienteError';
        this.message = "".concat(this.name, ": ").concat(message);
        this._saldoDisponivel = saldoDisponivel;
    }
    Object.defineProperty(SaldoInsuficienteError.prototype, "saldoDisponivel", {
        get: function () {
            return this._saldoDisponivel;
        },
        enumerable: false,
        configurable: true
    });
    return SaldoInsuficienteError;
}());
exports.SaldoInsuficienteError = SaldoInsuficienteError;
