// Interface genérica instancia o método test que deve ser implementado recebendo um tipo e retornando o mesmo
// O método, por ser criado com um generic T, deixa com que a classe determine qual tipo irá implementar
var Teste = /** @class */ (function () {
    function Teste() {
    }
    Teste.prototype.test = function (arg) {
        return arg;
    };
    return Teste;
}());
var Teste1 = /** @class */ (function () {
    function Teste1() {
    }
    Teste1.prototype.test = function (arg) {
        return arg;
    };
    return Teste1;
}());
