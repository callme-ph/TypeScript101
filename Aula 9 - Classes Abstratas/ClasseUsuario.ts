import { Pessoa } from './Pessoa'

export abstract class  Usuario implements Pessoa {

    protected _nome: string;
    protected _idade: number = 0;

    
    // Com o tipo da variável sendo any é possível fazer uma "sobrecarga", onde o construtor recebe como parâmetros, variáveis de qualquer tipo  
    constructor(nome:any, idade?:any){  // A interrogação indica que o parâmetro não é obrigatório, por isso, deve ser tratado no construtor. 
        this._nome = nome;

        if( typeof(idade) == 'number' ){
                if ( idade < 0 ){
                    this._idade = 0
                } else { this._idade = idade; 

                }
        } else {
            console.log(` Valor passado para idade não é de um tipo válido. O tipo deve ser number e o passado foi ${typeof(idade)}.`)
            this._idade = 0
        }

        //this.testeFuncaoInterface(5);
    }

    // TESTE DE IMPLEMENTACAO DA FUNCAO EM INTERFACE

    public testeFuncaoInterface(n:number): number {
        do{
            console.log(n--);
        }while( n > 0)

        return n;
    }
    
    public abstract exibirInformacoes();

    get nome(): string{
        return this._nome;
    }

    set nome(userName:string){
        this._nome = userName;
    }

    get idade(): number{
        return this._idade;
    }

    public set idade( i : number){
        if( i >= 0 ) {
            this._idade = i;
        } else { this._idade = 0 }
    }
}