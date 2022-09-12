// Without Template literals
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);

// With Template literals
epicPhrase = `${hello} ${world}!`;
console.log(epicPhrase);

// Multi-line strings
let lorem = 'this is a string \n' + 'this is another line';
console.log(lorem);

lorem = `this is an epic phrase
and this is the continue of that phrase`;
console.log(lorem);
