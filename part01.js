"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list1 = [1, 2, 3, 4];
var list2 = [];
var nomes = ['MARIA', 'JOAO', 'ANABELA'];
// --------------------------------------------------------------------------------------------------------------------
// map: aplica uma função a cada elemento da coleção original, retornando uma nova coleção com os elementos alterados
function dobro(x) {
    return x * 2;
}
function triplo(x) {
    return x * 3;
}
var m1 = list1.map(dobro);
var m2 = list1.map(triplo);
var m3 = list1.map(function (x) { return x * 2; });
console.log('MAP ------------------------------');
console.log(m1);
console.log(m2);
console.log(m3);
console.log('END ------------------------------');
console.log();
// --------------------------------------------------------------------------------------------------------------------
// filter: retorna uma nova coleção contendo apenas aqueles elementos da coleção original que satisfazem um dado predicado
function par(x) {
    return x % 2 == 0;
}
var f1 = list1.filter(par);
var f2 = list1.filter(function (x) { return x > 1; });
var f3 = list1.filter(function (x) { return x % 2 != 0; });
console.log('FILTER ---------------------------');
console.log(f1);
console.log(f2);
console.log(f3);
console.log('END ------------------------------');
console.log();
// --------------------------------------------------------------------------------------------------------------------
// reduce: aplica cumulativamente uma função aos elementos de uma coleção, retornando o resultado final.
// * você pode informar, opcionalmente, um valor inicial como parâmetro (necessário para coleção vazia).
function soma(x, y) {
    return x + y;
}
function produto(x, y) {
    return x * y;
}
var r1 = list1.reduce(soma, 0);
var r2 = list1.reduce(produto, 1);
//let r3 = list2.reduce(soma);
var r4 = list2.reduce(soma, 0);
console.log('REDUCE----------------------------');
console.log(r1);
console.log(r2);
console.log(r4);
console.log('END ------------------------------');
console.log();
// --------------------------------------------------------------------------------------------------------------------
// sort: ordena a coleção conforme a função de comparação informada como parâmetro
function comparacaoPorTmanho(s1, s2) {
    return s1.length - s2.length;
}
console.log('SORT------------------------------');
nomes.sort(comparacaoPorTmanho);
console.log(nomes);
nomes.sort();
console.log(nomes);
nomes.sort(function (s1, s2) { return s1.length - s2.length; });
console.log(nomes);
console.log('END ------------------------------');
console.log();
