import { Usuario } from "./ClasseUsuario";

export class Estudante extends Usuario{

    public serie:number;

    public constructor(nome:string, _serie?:number){
        super(nome);

        if ( _serie == undefined || _serie < 0 ){
            this.serie = 0;
        } else { this.serie = _serie }
    }

    public exibirInformacoes(): void {
        console.log(`Nome do estudante é ${this._nome}, o estudante tem ${this._idade} anos de idade e é do ${this.serie}º ano. \n`);
    }
}