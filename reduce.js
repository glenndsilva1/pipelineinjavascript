const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15

const add = (x, v) => v ? v + x : x;
const addA = v => add('a', v);
const addB = v => add('b', v);
const addC = v => add('c', v);
const abc = addC(addB(addA()));
console.log(abc); // "abc"
// simple generic function composer …
const compose = (...fns) => v => (
  fns.reduce((acc, fn) => fn(acc), v)
);
const abc = compose(addA, addB, addC);
console.log(abc()); // "abc"

const pipe = (...fns) => (x) =>
  fns.reduce((acc, fn) => fn(acc), x);

const add = (x) => x + 2;
const multiply = (x) => x * 3;

const addAndMultiply = pipe(add, multiply);

console.log(addAndMultiply(2)); // (2 + 2) * 3 = 12

