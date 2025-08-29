"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contabancaria_1 = require("./projeto_conta/contabancaria");
var saldoinsuficienteerror_1 = require("./projeto_conta/errors/saldoinsuficienteerror");
var valorinvalidoerror_1 = require("./projeto_conta/errors/valorinvalidoerror");
var emailinvalidoerror_1 = require("./projeto_usuario/errors/emailinvalidoerror");
var nomeinvalidoerror_1 = require("./projeto_usuario/errors/nomeinvalidoerror");
var usuario_1 = require("./projeto_usuario/usuario");
try {
    var usuario = usuario_1.Usuario.criarUsuario('emerson@email.com', 'Emerson');
    console.log("".concat(usuario.nome, " - ").concat(usuario.email));
}
catch (e) {
    if (e instanceof emailinvalidoerror_1.EmailInvalidoError) {
        console.log("@ -> ".concat(e.message));
    }
    else if (e instanceof nomeinvalidoerror_1.NomeInvalidoError) {
        console.log("N -> ".concat(e.message));
    }
}
console.log("Programa executando......");
var c1 = new contabancaria_1.ContaBancaria();
var c2 = new contabancaria_1.ContaBancaria();
try {
    c1.depositar(110);
}
catch (e) {
    console.log("ERRO: ".concat(e.message, " ").concat(e.valorInvalido));
}
finally {
    console.log("Saldo da conta C1: ".concat(c1.saldo));
    console.log("Saldo da conta C2: ".concat(c2.saldo));
    console.log("------------------------------");
}
try {
    c1.sacar(111);
}
catch (e) {
    if (e instanceof valorinvalidoerror_1.ValorInvalidoError) {
        console.log("".concat(e.message, ": ").concat(e.valorInvalido));
    }
    if (e instanceof saldoinsuficienteerror_1.SaldoInsuficienteError) {
        console.log("".concat(e.message, ": ").concat(e.saldoDisponivel));
    }
    console.log(e.message);
}
finally {
    console.log("Saldo da conta C1: ".concat(c1.saldo));
    console.log("Saldo da conta C2: ".concat(c2.saldo));
    console.log("------------------------------");
}
try {
    c1.transferir(50, c2);
}
catch (e) {
    console.log(e.message);
}
finally {
    console.log("Saldo da conta C1: ".concat(c1.saldo));
    console.log("Saldo da conta C2: ".concat(c2.saldo));
    console.log("------------------------------");
}
