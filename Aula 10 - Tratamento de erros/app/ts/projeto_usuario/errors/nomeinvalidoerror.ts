export class NomeInvalidoError implements Error{

    name: string;
    message: string;

    public constructor(){
        this.name = "NomeInvalidoError";
        this.message = "Nome inválido";
    }

    toString():string{
        return `${this.name} : ${this.message} `
    }

}