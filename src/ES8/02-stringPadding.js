const string = 'Hello';
console.log(string.padStart(10, '_')); // '_____Hello'

console.log(string.padEnd(10, '_')); // 'Hello_____'

const newString = string.padStart(10, '*').padEnd(15, '*');
console.log(newString);