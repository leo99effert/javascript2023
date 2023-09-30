/**
 * check for errors first
 */

let person = 'sune';
function printPerson(person) {
  if ( 
    typeof person === 'undefined' ||
    person.trim() === '' || 
    person === 'none'
  ) {
    console.log('person is not valid');
    return;
  }

  console.log('the person is: ' + person);
}
printPerson(person);

var coinResult = Math.random() < 0.5 ? 'heads' : 'tails';
console.log(coinResult);

let country = 'other';
let town;
let currency;
let language;

[town, currency, language] = country === 'Sweden' ? ['Stockholm', 'SEK', 'Swedish'] : ['Berlin', 'EUR', 'German'];
console.log([country, town, currency, language]);

let cashFlow = 20000;
let innerPeace = cashFlow < 0      ? 'bad'
               : cashFlow < 10000  ? 'good'
                                   : 'great';
console.log(innerPeace);

function applyCurrency(price, inEuro) {
  return price + (inEuro ? ' EUR' : ' SEK'); // terneries needs () if part of expression
}
console.log(applyCurrency(100, false));
console.log(applyCurrency(10, true));


// use     === and !==
// avoid   ==  and !=    

// falsy
const myBool = !!false;
const myNullable = !!null;
const myUndefinedable = !!undefined;
const myString = !!'';
const myInt = !!0;
const myFloat = !!0.00000;
const myNanable = !!NaN;
const myWierdExtraFalsy = !!0n;
console.log(myFloat);

let myStuff = ['this laptop'];
let hasStuff = !!myStuff.length;
console.log(hasStuff);


if (typeof variableThatDoesNotExist === 'undefined') {
  console.log('This is the only way to check if a variable does not exist...');
}

// nullsy        nullish whatever
console.log(null == undefined); // only good use of ==
let myVaribleThatIsNotYetDefinedOrAlsoMightBeNull;
//       value == null        to check for nullsy 
function isNullsy(value) {
  return (value == null) ? 'yes its a nullsy' : 'no it is not a nullsy';
}
console.log(isNullsy(myVaribleThatIsNotYetDefinedOrAlsoMightBeNull));
console.log(isNullsy(null));
console.log(isNullsy(undefined));
console.log(isNullsy(123));