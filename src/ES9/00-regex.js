const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2022-12-19');
console.log(matchers);
/*
[
  '2022-12-19',
  '2022',
  '12',
  '19',
  index: 0,
  input: '2022-12-19',
  groups: undefined
]
*/
console.table(matchers);
/*
┌─────────┬──────────────┐
│ (index) │    Values    │
├─────────┼──────────────┤
│    0    │ '2022-12-19' │
│    1    │    '2022'    │
│    2    │     '12'     │
│    3    │     '19'     │
│  index  │      0       │
│  input  │ '2022-12-19' │
│ groups  │  undefined   │
└─────────┴──────────────┘
*/