export class Livro{

    constructor(
        private _nome: string,
        private _autor: string,
        private _editora: string,
        private _ano: number
    ){ }

    
    public get nome() : string {
        return this._nome;
    }

    
    public get autor() : string {
        return this._autor;
    }
    
    
    public get ano() : number {
        return this._ano;
    }

    
    public get editora() : string {
        return this._editora;
    }
    
    
    
}