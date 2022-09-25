const users = {
    gndx: {
        country: 'MX'
    },
    ana: {
        country: 'CO'
    },
};

console.log(users.gndx.country); // MX
console.log(users.bebeloper.country); // TypeError: Cannot read properties of undefined (reading 'country')
console.log(users.bebeloper?.country); // undefined

const adventurer = {
    name: 'Alice',
    cat: {
    name: 'Dinah'
}
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined