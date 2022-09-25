let anotherNumber = null;

let validate = anotherNumber ?? 5;

console.log(validate); // 5

anotherNumber = 1;

validate = anotherNumber ?? 5;

console.log(validate); // 1