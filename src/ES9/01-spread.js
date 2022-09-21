const user = {
    userName: 'ButchBet',
    age: 20,
    country: 'CO'
};

const {userName, ...values} = user;
console.log(userName); // ButchBet
console.log(values); /* { age: 20, country: 'CO' } */