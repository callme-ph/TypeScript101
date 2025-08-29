System.register(["./models/livro", "./controllers/livrocontroller"], function (exports_1, context_1) {
    "use strict";
    var livro_1, livro, livrocontroller_1, controller;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (livro_1_1) {
                livro_1 = livro_1_1;
            },
            function (livrocontroller_1_1) {
                livrocontroller_1 = livrocontroller_1_1;
            }
        ],
        execute: function () {
            livro = new livro_1.Livro("Meu livro", "Emerson", "UFRN", 2021);
            console.log(livro);
            controller = new livrocontroller_1.LivroController();
            // document é a página HTML, deste document é selecionada a tag de classe form, ou seja,
            // o formulárioa e adiciona um obervador ao evento de clique no Submit  
            // e vincula ao método cadastrar da classe LivroControle.
            document.querySelector('.form').addEventListener('submit', controller.cadastrar.bind(controller));
        }
    };
});
