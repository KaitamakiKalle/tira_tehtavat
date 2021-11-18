function findMostFreq(arr) {
  const numMap = new Map();
  arr.forEach((elem) => {
    if (numMap.has(elem)) {
      let value = numMap.get(elem);
      value++;
      numMap.set(elem, value);
    } else {
      numMap.set(elem, 1);
    }
  });
  return Math.max(...numMap.values());
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

const myArr = createNumArr(100000);

const mostFrequent = findMostFreq(myArr);

console.log(myArr);
console.log(mostFrequent);

module.exports = { findMostFreq, createNumArr };

/*
Tämä algoritmi toimii huomattavasti nopeammin kuin edellinen.
100000 alkioita sisältävän taulukon käsittely kestää vain 0.22 sekuntia kun edellisellä
aika oli ~27 sekuntia. Algoritmin tehokkuus taitaa olla O(n) koska jokainen alkio käsitellään
vain kerran.
*/
