// const variável somente para leitura 
var a = "Hello World";
console.log(a);
// var é uma variável global, independente de escopo
var nomeForadoIf = "Henrique Sousa";
var check = false;
console.log(nomeForadoIf);
var numberOfCheckins = 100;
if (check) {
    var nomeDentroDoIf = "Mariana Albuquerque";
    var nomeDentroDoEscopo = "Sarah Rúbia";
    // para o console.log imprimir, ele precisa estar dentro do mesmo escopo que a var let
    // console.log(nomeDentroDoEscopo)
}
else {
    nomeDentroDoIf = "Maria Augusta";
}
console.log(nomeDentroDoIf.length);
console.log(nomeDentroDoIf.indexOf('Maria'));
console.log(nomeDentroDoIf.indexOf('Augusta'));
console.log(nomeDentroDoIf.indexOf('Mariana'));
// o indexOf('Mariana') retorna -1 porque é uma condição do If que não é atendida. O 'Mariana' é falso e por isso retorna -1. O valor true é Maria Augusta.
console.log(nomeDentroDoIf);
// O console.log abaixo dá erro, porque a variavel let tá dentro do if
// console.log(nomeDentroDoEscopo)
// Declaração de Array
// Primeira sintaxe
var nomes = ['João', 'Maria', 'Raquel', 'Felipe'];
var totais = [10, -10, 20, 0, 50, 8];
var checks = [true, false, true, true, false];
// Segunda sintaxe
var sobrenomes = ['Santos', 'Sousa', 'Barata', 'Oliveira'];
var quantidade = [9, 7, 9, 1, 34];
var isEating = [false, true, false, true, true];
// Funções de array
// Adicionar item no final do array
nomes.push('Sarah');
console.log(nomes);
// Remover item do final do array
nomes.pop();
console.log(nomes);
// Valores read-only, somente leitura. 
// As funções de arrays não existem para arrays read-only. Não permite alterações de valores
var numerosDaMega = [60, 45, 09, 7, 21, 3];
// Tuplas
var itens = ['Feijão', 90];
var pessoa = ['Pedro', 35, 90];
var pessoa2 = ['Sarah', 28, 168];
