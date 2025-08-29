export interface Pessoa{
    nome:string;
    idade:number;

    exibirInformacoes(): void;

    testeFuncaoInterface(n:number): number; // Testando funcoes na interface;
}