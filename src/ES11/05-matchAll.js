const regexp = /(Apple)/g;

const fruits = 'Apple, Banana, Kiwi, Apple, orange, etc etc. etc...';

for(const match of fruits.matchAll(regexp)) {
  console.log(match);
}

const result = [...fruits.matchAll(regexp)];
result;