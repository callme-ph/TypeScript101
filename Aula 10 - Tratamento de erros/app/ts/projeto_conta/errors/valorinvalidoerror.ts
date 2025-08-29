// Implementação de erro, ao usar implements é necessáraio 
export class ValorInvalidoError implements Error {

    name: string;
    message: string;
    private _valorInvalido: number;

    constructor(message: string, valorInvalido: number){
        this.name = 'ValorInvalidoError';
        this.message = `${this.name}: ${message}`
        this._valorInvalido = valorInvalido;
    }

    public get valorInvalido() : number {
        return this._valorInvalido;
    }
}