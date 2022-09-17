const array1 = [5, 4, 3, 8];
const string1 = 'Kevin';

function* iterate(array) {
    for(let value of array) {
        yield value;
    }
}

const it1 = iterate(array1);
console.log(it1.next().value); 
const it2 = iterate(string1);
console.log(it2.next().value);
