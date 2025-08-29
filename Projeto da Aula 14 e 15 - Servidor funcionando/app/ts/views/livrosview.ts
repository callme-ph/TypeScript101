import { Livros } from "../models/livros";

//
export class LivrosView{

    // Elemento HTML
    private _elemento: Element;

    // O objeto LivroView receberá um seletor ( id/class ) ao ser criado
    constructor(seletor: string){
        // A propriedade _element receberá um elemento HTML da página que possui o seletor indicado ( será uma DIV )
        this._elemento = document.querySelector(seletor);
    }

    // Este método vai pegar a DIV selecionada pelo seletor e editá-la
    public update(modelo: Livros){
        this._elemento.innerHTML = this.templateHTML(modelo);
    }

    public templateHTML(modelo: Livros):string{
        // Irá retornar um template string com estrutura HTML, será a tabela exibindo os livros. ( Utilizará o LivroController para isso )
        return `

        <table>
            <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>Editora</th>
                <th>Ano</th>
            </tr>
            

            ${modelo.exibirLivros().map(livro =>{

                // Para cada livro o map irá retornar uma linha.
                return `
                    <tr>
                        <td>${livro.titulo}</td>
                        <td>${livro.autor}</td>
                        <td>${livro.editora}</td>
                        <td>${livro.ano}</td>
                    </tr>
                `
            }).join('')}

        </table>                
        `
    }


}