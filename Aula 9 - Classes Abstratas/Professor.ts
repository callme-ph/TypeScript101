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

    public exibirInformacoes() {
        // super.exibirInformacoes(); // Herança de método, é possível chamar o método da classe mãe - Usuário
         if(this._materia != undefined){
            
            // Este método é o mesmo da super-classe, porém, a saída é outra. Isso é o polimorfismo.
            console.log(`O nome do professor é ${this._nome}, o professor tem ${this._idade} anos de idade e dá aula de ${this._materia}`)
        };
        
    }
    
    public set materia(v : string) {
        this._materia = v;
    }

    
    public get materia() : string {
        return this._materia;
    }
    
    
}