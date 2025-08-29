/* GENERICS */

// É possível tratar com diferentes tipos de variáveis, os quais são definidos e tratados em tempo de execução.

// Exemplo 1

function info<T>(arg: T): T { // T é chamada de variável de tipo 
    return arg;
}

// console.log(typeof(info(55)))
// console.log(typeof(info('teste')))
// console.log(typeof(info("teste")))
// console.log(typeof(info<number>(55)))

// let lista = new Array(); // Lista é do tipo any.
// let lista = new Array<string>(); // lista é do tipo string

// Exemplo 2

class ListaGenerica<T, I> {

    _id: I;
    lista: T[] = []

    constructor(id: I){
        this._id = id;
    }

    adicionar(arg: T){
        this.lista.push(arg);
    }

    imprimir(){
        this.lista.forEach(e => console.log(e));
        console.log(this._id)
    }

    get id(): I {
        return this._id;
    }
}

let list = new ListaGenerica<string, number>(123); // Definindo o tipo da lista genérica, com dois tipos
// abstratos definidos e com ID obrigatório.

list.adicionar('teste')
list.adicionar("teste1")

//list.imprimir();

/* DECORATORS */
// Ao utilizar um decorator indicamos que um método, uma classe, uma propriedade, possui um comportamento quando este for executado.
// Decorators de classe são aplicados ao construtor de uma classe.
// Decorator de método é aplicado ao descritor do método da classe.
// Decorator de propriedade é declarado antes de uma declaração da propriedade;

// EXEMPLO 3

function exemploDecoratorClasse(construtor: Function /* Function é a própria classe que é decorada */){
    console.log("Decorator da classe")
}

/*@dataDecorator // É executada uma vez quando a classe é instanciada, ou seja, somente uma vez*/
class Pessoa{
    
    @validar()
    public idade: number;

    constructor(){
        console.log("Pessoa criada.")
    }

    @metodoDecorator()
    public mensagem(){
        console.log("TESTE")
        console.log()
    }

}

new Pessoa();
new Pessoa();

// Esta instanciação do construtor do decorator é a mais genérica.
// Neste caso o parâmetro REST indica que pode haver qualquer quantidade de parâmetros, de qualquer tipo.

function dataDecorator(construtor: {new(...args: any[]): { }} ){
    // Retorna uma nova classe criada, que extende o construtor da classe decorada.
    return class extends construtor{
        constructor(...args: any[]){
            super(args)
            console.log("Construtor alterado pelo dataDecorator");
            console.log("Hora: ", new Date().getHours(), ":", new Date().getMinutes());
        }

        /*mensagem(){ super(args) }*/
    }
}


/* EXEMPLO DE DECORATORS COM MÉTODOS */

// A função será chamada quando um método for chamado.
function metodoDecorator() {

    return function(    target:any, nomePropriedade: string, descritor: PropertyDescriptor )
                    {

                        console.log(`Nome do método: ${nomePropriedade}`);

                        // Método original chamado que ativou o decorator.
                        // Se o decorator estiver em um método Sacar(), metodoOriginal poderá fazer uma chamada de Sacar()
                        let metodoOriginal = descritor.value;

                        descritor.value = function(...args: any[]){
                            console.log('Comando antes da execução do método.');
                            let retorno = metodoOriginal.apply(this, args);
                            console.log('Comando depois da execução do método.');

                            return retorno;
                        }

                        return descritor;
                    }
}

let pessoa = new Pessoa()

pessoa.mensagem()

function validar(){

    return function(target: any /* Classe */, nomePropriedade:string /* Nome da propriedade da classe */){
        let val = target[nomePropriedade];

        let getter = () => val;

        let setter = (value: number) => {
            if(value < 0){
                throw new Error('Valor inválido|negativo;')
            } else { val = value;}
        }

        Object.defineProperty(target, nomePropriedade,{
            get: getter,
            set: setter
        })


    }
}

try{
    pessoa.idade = 200;
    
} catch(e) {
    console.log(e)
} finally { console.log(pessoa.idade) }