const list = new Set();

list.add('tem 1').add('tem 2').add('tem 3');

console.log(list);

list.forEach((value, key, set) => {
    console.log(key, value, set);
});