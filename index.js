let a = 4;
let b = 2;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}
console.log(add(a, b), subtract(a, b), divide(a, b), multiply(a, b));
let n = 249
function increment(n){
   return ++n;

}
console.log(increment(n));
let m = 41

function decrement(m){
 return --m;

}
console.log(decrement(m));

const  number = 2;
const number1 = 2.2;
const string ="nonsense!"
function makeInt(n){
  return  parseInt(n, 10);

}
console.log(makeInt(number));

function preserveDecimal(n){
return parseFloat(n);

}
console.log(preserveDecimal(number1));
