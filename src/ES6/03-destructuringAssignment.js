// Rest spread (for arrays)
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);
console.log(fruits[0], fruits[1]);

// Rest spread (for objects)
let user = {userName: 'Kevin', age: 20};
let {userName, age} = user;
console.log(userName, age);
console.log(user.userName, user.age);