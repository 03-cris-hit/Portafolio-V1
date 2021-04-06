console.log('------------------- Types, Values, and Variables -------------------------');

let lead = 'Cristóbal'
let coLead = lead
coLead = 'Paul McCartney'
console.log(lead, coLead) // John Lennon Paul McCartney :0!

let letters = ['s', 'n', 'o', 'w']
letters[0] = 'k'
console.log(letters,lead) // (4) ["k", "n", "o", "w"]

let word = 'snow';
console.log(word[0]) // "s"


console.log('------------------- Type Conversions -------------------------');

/**
 * Converting Booleans to Strings
 */
 console.log(String(false));


 /**
 * Converting Dates to Strings
 */
console.log(String(Date()));


 /**
 * Converting Strings to Numbers
 */
console.log(Number("3.14"));


 /**
 * Converting Booleans to Numbers
 */
console.log(Number(false));

/**
 * Converting Dates to Numbers
 */
var d = new Date();
console.log(Number(d));

var a = new Date();
console.log(a.getTime());


console.log('------------------- Conversions and Equality -------------------------');
if(0 == false){;
    console.log('TRUE');
}else{
    console.log('FALSE');
}

if(1 == true){;
    console.log('TRUE');
}else{
    console.log('FALSE');
}
var decision = 2 ? true : false
if(decision)
{
    console.log('TRUE');
}else{
    console.log('FALSE');
}

console.log('------------------- Explicit Conversions  -------------------------');

let result;

result = '3' + 2; 
console.log(result) // "32"

result = '3' + true; 
console.log(result); // "3true"

result = '3' + undefined; 
console.log(result); // "3undefined"

result = '3' + null; 
console.log(result); // "3null"

console.log('------------------- Object to Primitive Conversions  -------------------------');

 
let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      console.log(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };
  
  // conversions demo:
  console.log(user); // hint: string -> {name: "John"}
  console.log(+user); // hint: number -> 1000
  console.log(user + 500); // hint: default -> 1500

 console.log('-------------------   Declarations with let and const  -------------------------');

 var tester = "hey hi";
 console.log(tester);

 let times = 4;
 console.log(times)

 const greeting = {
    message: "say Hi",
    times: 4
}
console.log(greeting);
console.log('-------------------   Destructuring Assignment  -------------------------');

var names = ["alpha", "beta", "gamma", "delta"];
var [firstName, secondName] = names;
      
console.log(firstName);//"alpha"
console.log(secondName);//"beta"
  
//Both of the procedure are same
var [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];
          
console.log(firstName);//"alpha"
console.log(secondName);//"beta

