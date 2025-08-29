System.register([], function (exports_1, context_1) {
    "use strict";
    var LivrosView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            //
            LivrosView = class LivrosView {
                // O objeto LivroView receberá um seletor ( id/class ) ao ser criado
                constructor(seletor) {
                    // A propriedade _element receberá um elemento HTML da página que possui o seletor indicado ( será uma DIV )
                    this._elemento = document.querySelector(seletor);
                }
                // Este método vai pegar a DIV selecionada pelo seletor e editá-la
                update(modelo) {
                    this._elemento.innerHTML = this.templateHTML(modelo);
                }
                templateHTML(modelo) {
                    // Irá retornar um template string com estrutura HTML, será a tabela exibindo os livros. ( Utilizará o LivroController para isso )
                    return `

        <table>
            <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>Editora</th>
                <th>Ano</th>
            </tr>
            

            ${modelo.exibirLivros().map(livro => {
                        // Para cada livro o map irá retornar uma linha.
                        return `
                    <tr>
                        <td>${livro.titulo}</td>
                        <td>${livro.autor}</td>
                        <td>${livro.editora}</td>
                        <td>${livro.ano}</td>
                    </tr>
                `;
                    }).join('')}

        </table>                
        `;
                }
            };
            exports_1("LivrosView", LivrosView);
        }
    };
});
