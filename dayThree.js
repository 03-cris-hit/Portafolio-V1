console.log('------------------- Primary Expressions -------------------------');

console.log(1.23)
console.log('HOLA');

console.log('------------------- Object and Array Initializers -------------------------');
const object1 = { a: 'foo', b: 42, c: {} };

console.log(object1.a);
// expected output: "foo"

const a = 'foo';
const b = 42;
const c = {};
const object2 = { a: a, b: b, c: c };
console.log(object2);

let arrayOne = ['UNO','DOS','TRES']
let arrayTwo = ['UNO','DOS','TRES']
  console.log(arrayOne); // 1
  console.log(arrayTwo);

  console.log('------------------- Function Definition Expressions  -------------------------');
  var foo = function() { return 5; }
  console.log(foo);

  console.log('------------------- Conditional Property Access -------------------------');

  const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };
  console.log(adventurer.name);


  console.log('------------------- Operator Side Effects -------------------------');
  var x = 100
  var z = x++ + 2 * x
  console.log(z);
  console.log('------------------- Operator precedence -------------------------');
  console.log(3 + (4 * 5));
  var f = g = 5;
  console.log(f);
  console.log(g);
  var x = 100;
  var y = 5000;
  var z =50;
  var w = ((x - y) - z);
  console.log(w);


  
