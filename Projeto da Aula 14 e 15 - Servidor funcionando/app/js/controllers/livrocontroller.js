System.register(["../models/livro", "../models/livros", "../views/livrosview"], function (exports_1, context_1) {
    "use strict";
    var livro_1, livros_1, livrosview_1, LivroController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (livro_1_1) {
                livro_1 = livro_1_1;
            },
            function (livros_1_1) {
                livros_1 = livros_1_1;
            },
            function (livrosview_1_1) {
                livrosview_1 = livrosview_1_1;
            }
        ],
        execute: function () {
            // Controlador de Livros perite que seja criado uma comunicação 
            // entre a página HTML, com as entradas de um usuário e a criação de novos objetos do tipo
            // Livro que serão exibidas na página.
            LivroController = class LivroController {
                constructor() {
                    // O casting "<>" indica explicitamente que o tipo documento, o qual é mais
                    // genérico que HTMLInputElement, deve ser do tipo HTMLInputElement
                    this._inputTitulo = document.querySelector('#titulo');
                    this._inputAutor = document.querySelector('#autor');
                    this._inputEditora = document.querySelector('#editora');
                    this._inputAno = document.querySelector('#ano');
                    this._livros = new livros_1.Livros;
                    // Atribui para a propriedade _livrosView um objeto com o seletor livrosview que é 
                    // a ID da DIV na página Index
                    this._livrosView = new livrosview_1.LivrosView("#livrosview");
                    this._livrosView.update(this._livros);
                }
                // O método cadastrar recever um evento, o evento será o clique no botão de cadastrar um novo livro na página HTML
                cadastrar(event) {
                    // Esta linha previne que ao clicar o botão de cadastrar um novo livro, a página HTML não seja recarregada
                    event.preventDefault();
                    // Instancia um novo objeto do tipo livro e atribuí á seus atributos
                    // as informações recebidas dos inputs usando os atributos do Controlador.
                    let livro = new livro_1.Livro(this._inputTitulo.value, this._inputAutor.value, this._inputEditora.value, parseInt(this._inputAno.value) // convertendo de string para number
                    );
                    //console.log(livro);
                    // Após criar o objeto Livro com as informações do Form
                    // É utilizado o objeto da classe Livros para receber o novo Livro
                    // que é salvo no Array
                    this._livros.adicionar(livro);
                    //this._livros.exibirLivros().forEach(livro => console.log(livro));
                    this._livrosView.update(this._livros);
                }
            };
            exports_1("LivroController", LivroController);
        }
    };
});
