// Interface genérica instancia o método test que deve ser implementado recebendo um tipo e retornando o mesmo
// O método, por ser criado com um generic T, deixa com que a classe determine qual tipo irá implementar

interface GenericTest<T>{
    test(arg:T): T;

}

class Teste implements GenericTest<number>{

    test(arg:number): number {
        return arg;
    }
}

class Teste1 implements GenericTest<string>{

    test(arg:string): string {
        return arg;
    }
}