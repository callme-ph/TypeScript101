export class EmailInvalidoError implements Error{

    name: string;
    message: string;

    public constructor(){
        this.name = "EmailInvalidoError";
        this.message = "Email inválido";
    }

    toString():string{
        return `${this.name} : ${this.message} `
    }

}