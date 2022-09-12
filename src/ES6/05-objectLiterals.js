// enhaced object litereals
function newUser(user='Kevin', age=19, country='CL') {
    return { // this
        user:user,
        age:age,
        country:country
    }

    return { // or this
        user,
        age,
        country
    } // Just in case that the name of the arguments is the name of the retornable keys
}

console.log(newUser());
console.log(newUser('Oscar', 28, 'Mx'));

// One way to void the order of the paramentes is using RORO: Receive Object, Return Object
function newUser({
    user,
    age,
    country,
    uId
}) {
    const public = {
        user,
        age,
        country,
        uId
    }

    return public;
}

// Now, look what happens if I create 2 objects but one of them }
// receiving the paramentres desordered
const eider = newUser({
    user: 'Eider',
    age: 17,
    country: 'CO',
    uId: 001
});

const luis = newUser({
    country: 'VE',
    age: 18,
    user: 'Luis',
});

console.log(eider, luis);
console.log({eider, luis});