import { Livro } from "../models/livro";
import { Livros } from "../models/livros";
import { LivrosView } from "../views/livrosview";

// Controlador de Livros perite que seja criado uma comunicação 
// entre a página HTML, com as entradas de um usuário e a criação de novos objetos do tipo
// Livro que serão exibidas na página.

export class LivroController{

    // O tipo dos atributos são elementos de Input vindos
    // do forms na página HTML.

    private _inputTitulo: HTMLInputElement;
    private _inputAutor: HTMLInputElement;
    private _inputEditora: HTMLInputElement;
    private _inputAno: HTMLInputElement;

    // Objeto Livros para armazenar todos os livros cadastrados
    private _livros: Livros; 

    // Instancia um objeto LivroView para poder passar o Array de Livros e injetar o HTML editado na página Index
    private _livrosView: LivrosView;


    constructor(){
        // O casting "<>" indica explicitamente que o tipo documento, o qual é mais
        // genérico que HTMLInputElement, deve ser do tipo HTMLInputElement
        this._inputTitulo = <HTMLInputElement>document.querySelector('#titulo')
        this._inputAutor = <HTMLInputElement>document.querySelector('#autor')
        this._inputEditora = <HTMLInputElement>document.querySelector('#editora')
        this._inputAno = <HTMLInputElement>document.querySelector('#ano')

        this._livros = new Livros;

        // Atribui para a propriedade _livrosView um objeto com o seletor livrosview que é 
        // a ID da DIV na página Index
        this._livrosView = new LivrosView("#livrosview");
        this._livrosView.update(this._livros);
        
    }

    // O método cadastrar recever um evento, o evento será o clique no botão de cadastrar um novo livro na página HTML
    public cadastrar(event: Event){

        // Esta linha previne que ao clicar o botão de cadastrar um novo livro, a página HTML não seja recarregada
        event.preventDefault()

        // Instancia um novo objeto do tipo livro e atribuí á seus atributos
        // as informações recebidas dos inputs usando os atributos do Controlador.

        let livro = new Livro(
            this._inputTitulo.value,
            this._inputAutor.value,
            this._inputEditora.value,
            parseInt(this._inputAno.value) // convertendo de string para number
        )

        //console.log(livro);

        // Após criar o objeto Livro com as informações do Form
        // É utilizado o objeto da classe Livros para receber o novo Livro
        // que é salvo no Array
        this._livros.adicionar(livro);
        

        //this._livros.exibirLivros().forEach(livro => console.log(livro));

        this._livrosView.update(this._livros);

    }




}