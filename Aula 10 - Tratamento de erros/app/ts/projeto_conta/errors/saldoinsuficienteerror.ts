export class SaldoInsuficienteError implements Error{

    name: string;
    message: string;
    private _saldoDisponivel: number;

    constructor(message: string, saldoDisponivel: number){
        this.name = 'SaldoInsuficienteError';
        this.message = `${this.name}: ${message}`
        this._saldoDisponivel = saldoDisponivel;
    }

    public get saldoDisponivel() : number {
        return this._saldoDisponivel;
    }
}