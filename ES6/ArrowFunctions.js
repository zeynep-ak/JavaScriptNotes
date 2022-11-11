const myFunc = () => "value";

const myFunc2 = () => {
    const myVar = "value";
    return myVar;
}

const magic = () => new Date();

// const doubler = (item) => item * 2;
const doubler = item => item * 2;
const multiplier = (item, multi) => item * multi;

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4])); // [ 1, 2, 3, 4 ]

const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("Zeynep")); // Hello Zeynep
console.log(greeting()); // Hello Anonymous

// Rest Parameter

function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.

//sum
const sum = (...args) => {
    let total = 0;
    for (let arg of args) {
      total += arg;
    }
    return total;
}