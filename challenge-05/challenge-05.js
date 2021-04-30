/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [true, 'abc', 50, 'teste', 1.7];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction1(arg) {
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction1(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arg, value) {
  return arg[value];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = [true, 'teste', null, undefined, 50];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for (var value = 0; value < arr2.length; value++) {
  myFunction2(arr2, value);
}

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nome) {
  var livros = {
    livro1: { nome: 'Teste1', quantidadePaginas: 50, autor: 'Teste1', editora: "Teste1" },
    livro2: { nome: 'Teste2', quantidadePaginas: 100, autor: 'Teste2', editora: 'Teste2' },
    livro3: { nome: 'Teste3', quantidadePaginas: 150, autor: 'Teste3', editora: "Teste3" }
  }
  if (nome !== undefined)
    return livros[nome];
  return livros;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var livro = book('livro1');
"O livro " + livro.nome + " tem " + livro.quantidadePaginas + " páginas!";

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var nome = 'livro1';
var livro = book(nome);
"O livro " + nome + " foi publicado pela editora " + livro.editora + ".";
