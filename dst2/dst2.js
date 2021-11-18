//Luodaan kolmen eri kaupan tuotteista mapit
const xkauppamap = new Map([
  ['nimi', 'xkauppa'],
  ['lumilapio', 10],
  ['potkukelkka', 20],
  ['karvalakki', 5],
]);
const ykauppamap = new Map([
  ['nimi', 'ykauppa'],
  ['lumilapio', 5],
  ['potkukelkka', 20],
  ['karvalakki', 1],
]);
const zkauppamap = new Map([
  ['nimi', 'zkauppa'],
  ['lumilapio', 10],
  ['potkukelkka', 25],
  ['karvalakki', 15],
]);

//Funktio sum laskee parametrinä annetun mapin tuotteiden hintojen summan
const sum = function (shop) {
  let sum = 0;

  //Käytetään mapin values() metodia joka palauttaa iteraattori objektin
  //joka sisältää mapin jokaisen elementin arvon
  for (const value of shop.values()) {
    if (typeof value === 'number') {
      sum += value;
    }
  }
  return sum;
};

//Funktio jolla rakennetaan summa mappi joka sisältää annetujen kauppojen
//tuotteiden hintojen summat kaupan nimeen yhdistettynä
//key kertoo mistä annettujen mappien avain/arvo parista saadaan avain
//uuden mapin elementeille
const createSumMap = function (key, ...shops) {
  const sumMap = new Map();

  shops.forEach((shop) => {
    //Otetaan kaupan nimi mparametrin key arvon perusteella
    const name = shop.get(key);
    //lisätään name avaimeksi ja hyödynnetään sum() funktiota tuotteiden
    //yhteishinnan laskemiseen.
    sumMap.set(name, sum(shop));
  });

  return sumMap;
};

//minValueMap etsii pienimmän arvon annetusta mapista
const minValueMap = function (mapX) {
  //jokaista mapin elementtiä verrataan minValue muuttujan arvoon
  //alustetaan muuttuja js:n maksimi numeroarvolla koska mapin elementissä
  //oleva arvo on varmasti tätä pienempi
  let minValue = Number.MAX_VALUE;
  //minValueKey muuttujaan tallennetaan annetun mapin pienimmän arvon avain.
  let minValueKey = '';

  //käydään mappi läpi forEachilla
  mapX.forEach((value, key) => {
    if (typeof value === 'number' && value < minValue) {
      minValue = value;
      minValueKey = key;
    }
  });

  //palautetaan uusi mappi jossa on tallennettuna pienin arvo ja sen avain
  return new Map([[minValueKey, minValue]]);
};

console.log(
  minValueMap(createSumMap('nimi', xkauppamap, ykauppamap, zkauppamap))
);

module.exports = { sum, createSumMap, minValueMap };
