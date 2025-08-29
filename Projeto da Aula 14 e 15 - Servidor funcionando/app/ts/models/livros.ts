import { Livro } from "./livro";

// A classe livros ira receber os livros cadastrados e armazená-los em um Array.
export class Livros{
    
    private _livros: Array<Livro> = [];


    public adicionar(livro: Livro): void{
        this._livros.push(livro);
    }

    public exibirLivros(): Livro[]{
        return this._livros;
    }



}