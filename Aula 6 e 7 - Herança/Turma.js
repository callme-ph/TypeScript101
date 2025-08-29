"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turma = void 0;
var ClasseUsuario_1 = require("./ClasseUsuario");
var Turma = /** @class */ (function () {
    function Turma(estudantes) {
        this.estudantesTurma = [];
        if (estudantes == undefined || estudantes == null) {
            var tmpEstudantes = new ClasseUsuario_1.Usuario("Sem nome cadastrado");
            this.addEstudante = tmpEstudantes;
        }
        else {
            this.estudantesTurma = estudantes;
        }
    }
    Object.defineProperty(Turma.prototype, "estudantes", {
        get: function () {
            return this.estudantesTurma;
        },
        set: function (estudantes) {
            if (estudantes != null && estudantes != undefined) {
                this.estudantesTurma == estudantes;
            }
            else {
                this.estudantesTurma == this.estudantesTurma;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Turma.prototype, "addEstudante", {
        set: function (estudante) {
            this.estudantesTurma[this.estudantesTurma.length] = estudante;
        },
        enumerable: false,
        configurable: true
    });
    ;
    return Turma;
}());
exports.Turma = Turma;
