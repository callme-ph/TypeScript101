namespace StringUtils{

    let tamanhoMaximo = 10;

    export function maiuscula(texto: string): string {
        return texto.toUpperCase();
    }

    export function minusculo(texto: string): string {
        return texto.toLowerCase();
    }

    export function contarTexto(params: string): boolean {
        return params.length <= tamanhoMaximo;
    }
}