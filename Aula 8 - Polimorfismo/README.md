Polimorfismo - A capacidade de um objeto ou método, responder de diferentes formas dado um mesmo comando.

Exemplo: Utilizando como base as classe implementadas até agora, as classes Usuário e Professor ambas possuem o método exibirinformacoes, porém a saídade de ambos são diferentes. 

Sobrecarga de construtores e métodos é quando há mais de um construtor ou método na mesma classe, porém, no typescript não é possível fazer a sobrecarga criando diferentes construtores ou diferente smétodos, porém, é possível fazer isso utilizando uma declaração genérica dos tipos de variáveis recebidas como parâmetros do construtor e dos métodos e partir destas variáveis do tipo ANY, tratá-las de acordo com seu tipo. Assim, a classes ficam mais genéricas e podem abrangir mais casos.