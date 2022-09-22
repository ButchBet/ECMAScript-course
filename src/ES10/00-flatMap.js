// flat
const array = [1, 2, 3, 4, 5, [1, 2, 3, 4, [1, 2, 3, 4, [1, 2, 3, 4]]], 6, 9]
console.log(array.flat(3))

// flatMap
let array2 = [1, 2, 3 ,[4 ,5]];
// array2 = array2.flat();
let array3 = array2.flatMap((v, i, a) => {
  return {value: v, position: i, array: a,}
});

console.log(array3);