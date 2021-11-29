// findMostFreg etsii taulukosta eniten esiintyvän alkion.
function findMostFreq(arr) {
  const numMap = new Map();
  arr.forEach((elem) => {
    // Jos alkio jonka kohdalla olemme menossa löytyy numMapista kasvatetaan sen lkm:ää
    if (numMap.has(elem)) {
      // value = alkion arvo nnumMapissa
      let value = numMap.get(elem);
      // Kasvatetaan yhdellä
      value++;
      // Ja lisätään uudelleen numMappiin
      numMap.set(elem, value);
    } else {
      // Jos arvoa ei ole numMapissa se lisätään sinne ja arvoksi laitetaan yksi
      numMap.set(elem, 1);
    }
  });
  // Hyödynnetään Mapin values() metodia ja spread syntaxia arvot läpi ja otetaan Math.max():lla isoin arvo talteen.
  return Math.max(...numMap.values());
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
