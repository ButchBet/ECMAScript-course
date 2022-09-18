const array = ['Hello', 2, 7, 'Care chimba', 'La buena sog', true, {name: 'Carlos'}, 100];
console.log(array.includes('Hello')); // true
console.log(array.includes(3)); // false
console.log(array.includes(7)); // true
console.log(array.includes(true)); // true
console.log(array.includes(Object.name === 'Carlos')); // false
console.log(array.includes(100)); // true
console.log(array.includes('Care chimba')); // true