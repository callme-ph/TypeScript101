/* GENERICS */
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// É possível tratar com diferentes tipos de variáveis, os quais são definidos e tratados em tempo de execução.
// Exemplo 1
function info(arg) {
    return arg;
}
// console.log(typeof(info(55)))
// console.log(typeof(info('teste')))
// console.log(typeof(info("teste")))
// console.log(typeof(info<number>(55)))
// let lista = new Array(); // Lista é do tipo any.
// let lista = new Array<string>(); // lista é do tipo string
// Exemplo 2
var ListaGenerica = /** @class */ (function () {
    function ListaGenerica(id) {
        this.lista = [];
        this._id = id;
    }
    ListaGenerica.prototype.adicionar = function (arg) {
        this.lista.push(arg);
    };
    ListaGenerica.prototype.imprimir = function () {
        this.lista.forEach(function (e) { return console.log(e); });
        console.log(this._id);
    };
    Object.defineProperty(ListaGenerica.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ListaGenerica;
}());
var list = new ListaGenerica(123); // Definindo o tipo da lista genérica, com dois tipos
// abstratos definidos e com ID obrigatório.
list.adicionar('teste');
list.adicionar("teste1");
//list.imprimir();
/* DECORATORS */
// Ao utilizar um decorator indicamos que um método, uma classe, uma propriedade, possui um comportamento quando este for executado.
// Decorators de classe são aplicados ao construtor de uma classe.
// Decorator de método é aplicado ao descritor do método da classe.
// Decorator de propriedade é declarado antes de uma declaração da propriedade;
// EXEMPLO 3
function exemploDecoratorClasse(construtor /* Function é a própria classe que é decorada */) {
    console.log("Decorator da classe");
}
/*@dataDecorator // É executada uma vez quando a classe é instanciada, ou seja, somente uma vez*/
var Pessoa = /** @class */ (function () {
    function Pessoa() {
        console.log("Pessoa criada.");
    }
    Pessoa.prototype.mensagem = function () {
        console.log("TESTE");
        console.log();
    };
    __decorate([
        validar()
    ], Pessoa.prototype, "idade", void 0);
    __decorate([
        metodoDecorator()
    ], Pessoa.prototype, "mensagem", null);
    return Pessoa;
}());
new Pessoa();
new Pessoa();
// Esta instanciação do construtor do decorator é a mais genérica.
// Neste caso o parâmetro REST indica que pode haver qualquer quantidade de parâmetros, de qualquer tipo.
function dataDecorator(construtor) {
    // Retorna uma nova classe criada, que extende o construtor da classe decorada.
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.call(this, args) || this;
            console.log("Construtor alterado pelo dataDecorator");
            console.log("Hora: ", new Date().getHours(), ":", new Date().getMinutes());
            return _this;
        }
        return class_1;
    }(construtor));
}
/* EXEMPLO DE DECORATORS COM MÉTODOS */
// A função será chamada quando um método for chamado.
function metodoDecorator() {
    return function (target, nomePropriedade, descritor) {
        console.log("Nome do m\u00E9todo: ".concat(nomePropriedade));
        // Método original chamado que ativou o decorator.
        // Se o decorator estiver em um método Sacar(), metodoOriginal poderá fazer uma chamada de Sacar()
        var metodoOriginal = descritor.value;
        descritor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log('Comando antes da execução do método.');
            var retorno = metodoOriginal.apply(this, args);
            console.log('Comando depois da execução do método.');
            return retorno;
        };
        return descritor;
    };
}
var pessoa = new Pessoa();
pessoa.mensagem();
function validar() {
    return function (target /* Classe */, nomePropriedade /* Nome da propriedade da classe */) {
        var val = target[nomePropriedade];
        var getter = function () { return val; };
        var setter = function (value) {
            if (value < 0) {
                throw new Error('Valor inválido|negativo;');
            }
            else {
                val = value;
            }
        };
        Object.defineProperty(target, nomePropriedade, {
            get: getter,
            set: setter
        });
    };
}
try {
    pessoa.idade = 200;
}
catch (e) {
    console.log(e);
}
finally {
    console.log(pessoa.idade);
}
