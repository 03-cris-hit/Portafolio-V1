/**
 * Types, Values, and Variables
 */
console.log('--------------- Types, Values, and Variables -----------------');
 /**
  * EJEMPLO CON COMILLAS SIMPLES
  */
console.log('línea 1 de cadena de texto\n' +
'\línea 2 de cadena de texto');
/**
 * EJEMPLO CON COMILLAS INVERTIDAS
 */
console.log(`línea 1 de la cadena de texto
línea 2 de la cadena de texto`);

console.log('---------- Escape Sequences in String Literals ----------------------');


console.log(escape('abc123'));      // "abc123"
console.log(escape('äöü'));        // "%E4%F6%FC"
console.log( escape('ć'));        // "%u0107"

console.log('---------- Working with String Literals ----------------------');

var simp = 'Comillas simples.';
var dobl = "Comillas dobles.";
console.log(simp);
console.log(dobl);

console.log('------------- Template Literals ----------------------');

var nombre="cristóbal";
var plantilla= `hola ${nombre}`;
console.log(plantilla);

console.log('------------- Pattern Matching ----------------------');

var cadena = /quick\s(brown).+?(jumps)/ig;
var resultExec = cadena.exec('The Quick Brown Fox Jumps Over The Lazy Dog');
console.log(resultExec);

var cadenaTest = "Cristóbal";
var resultTest = /^Cristóbal/.test(cadenaTest);
console.log(resultTest);

var cadenaMatch = "Para más información, vea Capítulo 3.4.5.1";
var expresion = /(capítulo \d+(\.\d)*)/i;
var hallado = cadenaMatch.match(expresion);
console.log(hallado);

var cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
var arrayMeses = cadenaMeses.split(',');
console.log(arrayMeses);

console.log('------------- Boolean Values ----------------------');
var isNull = false; 

if(10>9){
    console.log('MAYOR');
}else{
    console.log('MENOR');
}

if (isNull) {
    console.log('TRUE');
}else{
    console.log('FALSE');
}

console.log('------------- null and undefined ----------------------');

var isUnde = undefined;
if (isUnde) {
    console.log('VARIABLE DEFINIDA');
} else {
    console.log('VARIABLE INDEFINIDA')
}
var isN = null;
if (isUnde) {
    console.log('VARIABLE CON CONTENIDO');
} else {
    console.log('VARIABLE VACIA')
}
console.log('------------- null and undefined ----------------------');
var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");
console.log(sym1);
console.log(sym2);
console.log(sym3);