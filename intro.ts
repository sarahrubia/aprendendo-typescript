
// const variável somente para leitura 
const a:string = "Hello World";
console.log(a);

// var é uma variável global, independente de escopo

var nomeForadoIf: string = "Henrique Sousa";
let check: boolean = false;

console.log(nomeForadoIf)

var numberOfCheckins: number = 100;

if (check) {
    var nomeDentroDoIf = "Mariana Albuquerque";
    let nomeDentroDoEscopo = "Sarah Rúbia";
    // para o console.log imprimir, ele precisa estar dentro do mesmo escopo que a var let
    // console.log(nomeDentroDoEscopo)
} else {
    nomeDentroDoIf = "Maria Augusta"
}

console.log(nomeDentroDoIf.length);
console.log(nomeDentroDoIf.indexOf('Maria'));
console.log(nomeDentroDoIf.indexOf('Augusta'));
console.log(nomeDentroDoIf.indexOf('Mariana'));
// o indexOf('Mariana') retorna -1 porque é uma condição do If que não é atendida. O 'Mariana' é falso e por isso retorna -1. O valor true é Maria Augusta.
console.log(nomeDentroDoIf)

// O console.log abaixo dá erro, porque a variavel let tá dentro do if
// console.log(nomeDentroDoEscopo)

// Declaração de Array

// Primeira sintaxe
let nomes: string[] = ['João', 'Maria', 'Raquel', 'Felipe'];
let totais: number[] = [10, -10, 20, 0, 50, 8];
let checks: boolean[] = [true, false, true, true, false];

// Segunda sintaxe
let sobrenomes: Array<string> = ['Santos', 'Sousa', 'Barata', 'Oliveira'];
let quantidade: Array<number> = [9, 7, 9, 1, 34];
let isEating: Array<boolean> = [false, true, false, true, true]

// Funções de array

// Adicionar item no final do array
nomes.push('Sarah');
console.log(nomes);

// Remover item do final do array
nomes.pop();
console.log(nomes)

// Valores read-only, somente leitura. 
// As funções de arrays não existem para arrays read-only. Não permite alterações de valores

let numerosDaMega: Readonly<number[]> = [60, 45, 09, 7, 21, 3]

// Tuplas
let itens: [string, number] = ['Feijão', 90];
let pessoa: [string, number, number] = ['Pedro', 35, 90]
let pessoa2: [nome:string, idade:number, altura:number] = ['Sarah', 28, 168]