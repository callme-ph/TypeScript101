import { EmailInvalidoError } from "./errors/emailinvalidoerror";
import { NomeInvalidoError } from "./errors/nomeinvalidoerror";

export class Usuario{

    public email: string;
    public nome: string;

    // Construtor privado só é acessível através da função criar usuários, depois de passar pelas validações de e-mail e nome.
    private constructor(email: string, nome: string){
        this.email = email;
        this.nome = nome;
    }

    public static criarUsuario(email: string, nome: string): Usuario{
        
        //teste para validar o email
        if(!this.emailInvalido(email)){
            // lançar uma exceção
            throw new EmailInvalidoError();
        }

        //teste para validar o nome

        if(!this.nomeInvalido(nome)){
            // lançar uma exceção
            throw new NomeInvalidoError();
        }

        return new Usuario(email,nome);
    }

    private static emailInvalido(email: string):boolean{

        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        return emailRegex.test(email);

    }

    private static nomeInvalido(nome: string){
        
        if(nome.length > 10 || nome == ""){
            return false;
        }

        return true;

    }


}