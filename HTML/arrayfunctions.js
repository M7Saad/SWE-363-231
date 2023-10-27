//some examples of array functions, I didn't use them in my website because it is too simple, but they are useful to know
//some arraaaaaaaaaaaaaaaaaaaay
let numbers = [1, 2, 3, 4, 5];

// Use forEach to console.log each item in the array
let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); 

// Use reduce to get the sum of all the numbers in the array
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); 

// Use filter to get all the even numbers in the array
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); 