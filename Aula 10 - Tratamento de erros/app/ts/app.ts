import { ContaBancaria } from "./projeto_conta/contabancaria";
import { SaldoInsuficienteError } from "./projeto_conta/errors/saldoinsuficienteerror";
import { ValorInvalidoError } from "./projeto_conta/errors/valorinvalidoerror";
import { EmailInvalidoError } from "./projeto_usuario/errors/emailinvalidoerror";
import { NomeInvalidoError } from "./projeto_usuario/errors/nomeinvalidoerror";
import { Usuario } from "./projeto_usuario/usuario";


try {
     let usuario = Usuario.criarUsuario('emerson@email.com','Emerson');    
     console.log(`${usuario.nome} - ${usuario.email}`)
} catch (e) {

    if(e instanceof EmailInvalidoError){
        console.log(`@ -> ${e.message}`)
    }else if (e instanceof NomeInvalidoError){
        console.log(`N -> ${e.message}`)
    }
    
}

 console.log("Programa executando......")

let c1 = new ContaBancaria();
let c2 = new ContaBancaria();


try {
    c1.depositar(110)
} catch (e) {
    console.log(`ERRO: ${e.message} ${e.valorInvalido}`);
} finally{
    console.log(`Saldo da conta C1: ${c1.saldo}`)
    console.log(`Saldo da conta C2: ${c2.saldo}`)
    console.log(`------------------------------`)
}

try {
    c1.sacar(111)
} catch (e) {
    if(e instanceof ValorInvalidoError){
        console.log(`${e.message}: ${e.valorInvalido}`)
    }
    if(e instanceof SaldoInsuficienteError){
        console.log(`${e.message}: ${e.saldoDisponivel}`)
    }

    console.log(e.message);
} finally{
    console.log(`Saldo da conta C1: ${c1.saldo}`)
    console.log(`Saldo da conta C2: ${c2.saldo}`)
    console.log(`------------------------------`)
}


try {
    c1.transferir(50,c2)
} catch (e) {
    console.log(e.message);
} finally{
    console.log(`Saldo da conta C1: ${c1.saldo}`)
    console.log(`Saldo da conta C2: ${c2.saldo}`)
    console.log(`------------------------------`)
}



