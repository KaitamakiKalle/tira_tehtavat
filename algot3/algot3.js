// findMostFreqBrute etsii annetusta taulukosta siinä useimmin esiintyvän alkion.
function findMostFreqBrute(arr) {
  // mostFregValueen tallennetan useiten esiintyvä arvo.
  let mostFregValue;
  // mostFregAmount kertoo monta kertaa muuttuja esiintyi
  let mostFregAmount = 0;
  // currentMostFreg:iin on tallennettu tämänhetkisen kierroksen eniten esiintyneen arvon lkm
  let currentMostFreg = 0;

  //käydään taulukko läpi kahdella silmukalla joissa jokaista taulukon arvoa verrataan jokaiseen taulukon arvoon
  arr.forEach((x) => {
    arr.forEach((y) => {
      if (x === y) {
        // Jos x ja y ovat samat kasvatetaan tämän kierroksen useimmin esiintyvän alkion lkm:ää yhdellä
        currentMostFreg++;
      }
    });
    // Jos currentMostFreg ylittää aikaisemman eniten esiintyneen arvon lkm:n tulee siitä eniten esiintynyt arvo.
    if (currentMostFreg > mostFregAmount) {
      mostFregValue = x;
      mostFregAmount = currentMostFreg;
    }
    // Nollataan currentMostFreg jotta seuraava kierros lähtee nollasta liikkeelle
    currentMostFreg = 0;
  });
  return mostFregValue;
}

// createNumArr luo taulukon joka sisältää n määrän satunnaisia numeroita
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
