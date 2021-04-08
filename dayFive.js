console.log('----------- eval() ------------')
var x = 10;
var y = 20;
var a = eval("x * y") + "<br>";
var b = eval("2 + 2") + "<br>";
var c = eval("x + 17") + "<br>";

var res = a + b + c;
console.log(res);
console.log('----------- Strict eval() ------------');
'use strict';
// Asumiendo que exista una variable global llamada mistypedVariable
mistypeVariable = 17;
console.log(mistypeVariable);
console.log('----------- The Conditional Operator ------------');

var isMember = true;
console.log("La Cuota es de:  " + (isMember ? "$2.00" : "$10.00"));

console.log('----------- First-Defined (??)  ------------');
var obj = { a: 0, b: "", c: false, d: null };
/*obj.a ?? 1000     // => 0
console.log(obj.a)
obj.a || 1000     // => 1000
console.log(obj.a)
obj.b ?? "Mr"  // => ""
console.log(obj.b)
obj.b || "Mr"  // => Mr"
console.log(obj.b)
obj.c ?? true  // => false
console.log(obj.c)
obj.c || true  // => true
console.log(obj.c)
obj.d ?? 10  // => 10
console.log(obj.d)
obj.f ?? "defined" // => "defined"
console.log(obj.d)
*/
console.log('-----------The await Operator   ------------');
let hello = async function() { return "Hello" };
hello();