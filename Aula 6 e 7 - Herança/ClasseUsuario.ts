export class Usuario {

    protected _nome: string;
    protected _idade: number;

    // A interrogação indica que o parâmetro não é obrigatório, por isso, deve ser tratado no construtor.
    constructor(nome:string, idade?:number){ 
        this._nome = nome;

        if(idade == undefined){
            this._idade = 0; 
        } else { this._idade = idade; }
    }

    
    public exibirInformacoes(): void{
        console.log(`Nome do usuário: ${this._nome} \nIdade do usuário: ${this._idade} \n`);
        return;
    }

    get nome(): string{
        return this._nome;
    }

    set nome(userName:string){
        this._nome = userName;
    }

    get idade(): number{
        return this._idade;
    }

    set idade(userName:number){
        this._idade = userName;
    }
}