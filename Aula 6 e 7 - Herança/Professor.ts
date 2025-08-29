import { Usuario } from "./ClasseUsuario";

// A classe Professor herda os métodos públicos e protected da classe Usuário 
export class Professor extends Usuario{

    private _materia:string;

    public constructor(nome:string, materia?:string, idade?:number){
        super(nome, idade);
        if ( materia == undefined || materia == null ){
            this._materia = "Sem materia cadastrada";
        } else { this._materia = materia }
    }

    public exibirInformacoes(): void {
        super.exibirInformacoes(); // Herança de método
         if(this._materia != undefined){return console.log(`O usuário é professor de ${this._materia}`)};
        
    }
    
    public set materia(v : string) {
        this._materia = v;
    }

    
    public get materia() : string {
        return this._materia;
    }
    
    
}