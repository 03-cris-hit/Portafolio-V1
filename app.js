
/**
 * AUTOR: CRISTOBAL NATANAEL PEREZ LOPEZ
 * 
 */

/**
 * Unicode Escape Sequences
 * 
 */
console.log('\uD83D\uDE80');
console.log('\u{1F680}');
/**
 * Unicode Normalization
 */
var codeNormalization = 'Cristobal';
console.log('----------------Unicode--------------------');
var a = codeNormalization.normalize('NFC');
var b = codeNormalization.normalize('NFD');
var c = codeNormalization.normalize('NFKC');
var d = codeNormalization.normalize('NFKD');

 console.log(a);
 console.log(b);
 console.log(c);
 console.log(d);
 console.log('---------------Optional Semicolons-----------------');
/**
 * Optional Semicolons
 */
 const hey = 'hey'
 const you = 'hey'
 const heyYou = hey + ' ' + you;
 
['B','C'].forEach((letter)=>{
    console.log(letter);
 })
 
console.log((1+3).toString());

var num1 = 1;
var num2 = 2;
var result = num1 + num2;
console.log(result);

/**
 * Método que retorna un array
 */
var array = (() => {
    var color = 'DE';
    var color2 = 'VER'+ color;
    return {
      color: {
          subColor: 'NEGRO'
      },
      color2: color2
    }
  })()

var array2 = {color: 'black'}
console.log(array.color.subColor);
console.log(array2);
var resultDes = -1 + 1 === 0 ? 'TRUE' :'FALSE';

console.log(resultDes);
console.log('----------------binary floating-point and rounding errors-----------------');
/**
 * binary floating-point and rounding errors
 */
var num = 0.1 + 0.2;
console.log(num);

console.log('----------------Arbitrary Precision Integers with BigInt-----------------');
var aNumber = 156n;
var aBigInt = BigInt(aNumber);
console.log(aBigInt);

console.log('----------------Dates and Times-----------------');

var date = new Date();

console.log('DAY:   +'+ date.getDay());
console.log('FULL YEAR:   +'+ date.getFullYear());
console.log('HOURS:   +'+ date.getHours());
