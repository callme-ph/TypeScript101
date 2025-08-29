"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
var valorinvalidoerror_1 = require("./errors/valorinvalidoerror");
var saldoinsuficienteerror_1 = require("./errors/saldoinsuficienteerror");
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria() {
        this._saldo = 0;
    }
    ContaBancaria.prototype.depositar = function (arg0) {
        if (arg0 > 0) {
            try {
                this._saldo += arg0;
                return true;
            }
            catch (e) {
                console.log("Erro em contabancaria.ts:  ".concat(e));
            }
        }
        else {
            throw new valorinvalidoerror_1.ValorInvalidoError('Valor inválido para depósito.', arg0);
        }
        return false;
    };
    ContaBancaria.prototype.transferir = function (value, account) {
        account.depositar(value);
        this.sacar(value);
    };
    ContaBancaria.prototype.sacar = function (n) {
        if (n <= 0) {
            throw new valorinvalidoerror_1.ValorInvalidoError('Valor inválido para sacar.', n);
        }
        if (this._saldo - n < 0) {
            throw new saldoinsuficienteerror_1.SaldoInsuficienteError('Saldo insuficiente', this._saldo);
        }
        else {
            this._saldo -= n;
            console.log("Valor sacado: ".concat(n, "."));
        }
    };
    Object.defineProperty(ContaBancaria.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        enumerable: false,
        configurable: true
    });
    return ContaBancaria;
}());
exports.ContaBancaria = ContaBancaria;
