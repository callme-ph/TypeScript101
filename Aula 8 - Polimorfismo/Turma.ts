import { Usuario } from "./ClasseUsuario";

export class Turma{
    
    public estudantesTurma: Usuario[] = [];

    public constructor(estudantes?:any){

        if ( estudantes == undefined || estudantes == null ){
            let tmpEstudantes = new Usuario("Sem nome cadastrado")
            this.addEstudante = tmpEstudantes;
        } else { this.estudantesTurma = estudantes }

    }

    get estudantes(): Usuario[]{
        return this.estudantesTurma;
    }

    set addEstudante(estudante:Usuario){
        this.estudantesTurma[this.estudantesTurma.length] = estudante;
    };

    set estudantes(estudantes: Usuario[]){
        if ( estudantes != null && estudantes != undefined ) {
            this.estudantesTurma == estudantes
        } else { this.estudantesTurma == this.estudantesTurma }
    }

}