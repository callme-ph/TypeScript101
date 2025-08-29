import { ValorInvalidoError } from "./errors/valorinvalidoerror";
import { SaldoInsuficienteError } from "./errors/saldoinsuficienteerror";

export class ContaBancaria{

    private _saldo:number = 0;

    public constructor(){

    }

    public depositar(arg0: number): boolean {

        if( arg0 > 0 ){
            try{
                this._saldo += arg0;
                return true;
            } catch(e) { 
                console.log( `Erro em contabancaria.ts:  ${e}`)
            }
        } else { 
            throw new ValorInvalidoError('Valor inválido para depósito.', arg0);
         }
        
         return false;
    }

    public transferir(value:number, account:ContaBancaria){
        
        account.depositar(value);
        this.sacar(value);
    }

    public sacar(n:number){
        
        if(n <= 0 ){
            throw new ValorInvalidoError('Valor inválido para sacar.', n);
        }

        if(this._saldo - n < 0 ){
            throw new SaldoInsuficienteError('Saldo insuficiente', this._saldo);
        } else {
            this._saldo -= n;
            console.log(`Valor sacado: ${n}.`);
        }
    }

    get saldo(): number{
        return this._saldo;
    }




}