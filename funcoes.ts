// Na função, o valor após o nome da função calc() ":number" indica que o retorno da função será um número

function calc():number{
    return 0;
}

// Retorna número

function calcToNumbers(x:number, y:number):number{
    return x+y;
}

// Retorna string

function numberToString (x:number):string {
    return '${x}';
}

function stringConcat(a:string, b:string): string {
    return '${a} ${b}';
}

function isTrue(value:boolean):boolean{
    return value;
}

let result = calcToNumbers(5, 4)
console.log(result)

let isTrueResult:boolean = isTrue(false);
if (isTrueResult) {
    console.log('É verdade')
} else {
    console.log('É falso')
}