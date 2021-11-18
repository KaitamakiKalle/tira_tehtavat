function findMostFreqBrute(arr) {
  let mostFregValue;
  let mostFregAmount = 0;
  let currentMostFreg = 0;

  arr.forEach((x) => {
    arr.forEach((y) => {
      if (x === y) {
        currentMostFreg++;
      }
    });
    if (currentMostFreg > mostFregAmount) {
      mostFregValue = x;
      mostFregAmount = currentMostFreg;
    }
    currentMostFreg = 0;
  });
  return mostFregValue;
}

function createNumArr(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * (9 - 1) + 1));
  }
  return arr;
}

// const myArr = createNumArr(100);

// const mostFrequent = findMostFreqBrute(myArr);

// const myArr = createNumArr(100000);

// const mostFrequent = findMostFreqBrute(myArr);

// console.log(myArr);
// console.log(mostFrequent);

module.exports = { findMostFreqBrute, createNumArr };

/*
Algoritmin tehokkuus on varmaankin O(n*n) koska jokainen alkio käydään läpi jokaisella alkiolla.
Suoritusnopeus hidastuu ~0.05 sekunnista ~27 sekuntiin kun alkioita on 100000 eikä 100
*/
