// var let and const
var lastName = 'Oscar';
lastName = 'Iris';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Cat';
animal = 'Dog'; // Not posible
console.log(animal);

// Arrow functions
let fruits = () => {
    if(true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Orange';
    }

    console.log(fruit1);
    console.log(fruit2); // Undefined
    console.log(fruit3); // Undefined
}

fruits();

function square(num) {
    return num * num;
}

console.log(square(2));

const square = (num) => {
    return num * num;
}

console.log(square(2));

const square = num => num * num; // Implicit return

console.log(square(2));
