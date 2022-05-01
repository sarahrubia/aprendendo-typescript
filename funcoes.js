// Na função, o valor após o nome da função calc() ":number" indica que o retorno da função será um número
function calc() {
    return 0;
}
// Retorna número
function calcToNumbers(x, y) {
    return x + y;
}
// Retorna string
function numberToString(x) {
    return '${x}';
}
function stringConcat(a, b) {
    return '${a} ${b}';
}
function isTrue(value) {
    return value;
}
var result = calcToNumbers(5, 4);
console.log(result);
var isTrueResult = isTrue(false);
if (isTrueResult) {
    console.log('É verdade');
}
else {
    console.log('É falso');
}
