Clases Abastratas e Interfaces 

Classes abstratas são classes que não permitem a declaração de objetos dessa classe. É uma superclasse que não é usada para declarar objetos, somente as classes herdeiras que declaram objetos.

Métodos abastratos não possuem implementações na classe mãe e são implementados nas classes herdeiras. 

Interfaces

A interface define um novo tipo. Pode incluir propriedades e declarações de método usando função sem detalhes de implementação. As interfaces não possuem construtores, definem apenas os membros com visibilidade pública ( readonly ou opicional ). 

Ao definir um membro privado ou se não definir todos os membros obrigatórios, haverá erro.

A partir de interfaces é possível definir/declarar funções

Implements/Extends - Implements obriga que a classe que implementa, implemente todos os métodos de interface que é implementada.

Sempre que uma classe implementa uma interface, todos os métodos e características devem ser colocadas na classe com escopo público.

A diferença entre as palavras-chave extends e implements é que a palavra extends faz com que uma classe tenha acesso aos métodos e atributos de uma super-classe sem precisar implementá-los; ao utilizar a palavra-chave implements, a classe DEVE implementar uma interface, a qual não implementa nenhum método. 