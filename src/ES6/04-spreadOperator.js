// Spread syntax: destructuring
let person = {
    name: 'Kevin',
    age: 20
};

let country = 'MX';

let dara = {
    id: '1007213957',
    ...person,
    country,
}

console.log(dara);

let kissEmoji = [..."👩‍❤️‍💋‍👩"];
console.log(kissEmoji);

let familyEmoji = [..."👨‍👩‍👦‍👦"];
console.log(familyEmoji);

// Rest syntax: layouting 
function addition(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

console.log(addition(1, 1, 2, 3, 5, 7, 10, 1000));

let kissEmoji = [..."👩‍❤️‍💋‍👩"];

let kissEmojiObject = {
    ...kissEmoji,
}

for(key in kissEmojiObject) {
    console.log(key, kissEmojiObject[key], typeof(kissEmojiObject[key]));
}