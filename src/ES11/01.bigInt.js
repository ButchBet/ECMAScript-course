const aBigNumber = 12323423433454354645578;
console.log(aBigNumber); // 1.2323423433454355e+22

const anotherBigNumber = 12323423433454354645578n;
console.log(anotherBigNumber); // 12323423433454354645578n 

const lastBigNumber = BigInt(12323423433454354645578);
console.log(lastBigNumber); // 12323423433454354694144n