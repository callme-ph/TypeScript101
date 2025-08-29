import { Livro } from "./models/livro";
let livro = new Livro("Meu livro","Emerson", "UFRN",2021);
console.log(livro);

import { LivroController } from "./controllers/livrocontroller";

let controller = new LivroController();

// document é a página HTML, deste document é selecionada a tag de classe form, ou seja,
// o formulárioa e adiciona um obervador ao evento de clique no Submit  
// e vincula ao método cadastrar da classe LivroControle.

document.querySelector('.form').addEventListener('submit',controller.cadastrar.bind(controller));
