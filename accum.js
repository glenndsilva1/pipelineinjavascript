// fns is array of functions x is a function output reduce accumulates all function output and lastly the function is called with initial value in x
const pipe = (...fns) => (x) => fns.reduce((acc, f) => f(acc), x);

const addFive = (x) => x + 5;
const square = (x) => x * x;
const double = (x) => x * 2;

const result = pipe(addFive, square, double)(2); // Returns 98

console.log(result);
