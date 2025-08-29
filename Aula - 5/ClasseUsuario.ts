export class Usuario {
    _nome: string;
    _idade: number;

    // A interrogação indica que o parâmetro não é obrigatório, por isso, deve ser tratado no construtor.
    constructor(nome:string, idade?:number){ 
        this._nome = nome;

        if(idade == undefined){
            this._idade = 0; 
        } else { this._idade = idade; }


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