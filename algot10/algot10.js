// Haetaan kirjasto päättelypuuta varten.
const Decisiontree = require('decision-tree');

/*
TrainingData on on tunnettua (hatusta vedettyä) dataa, joka kertoo, onko henkilö [ikä, sukupuoli (1==m, 2==n),
vuositulot tuhatta euroa, ostanut hilavitkuttimen (0==ei, 1==kyllä)].
*/
const data = [
  [18, 1, 10, 0],
  [20, 2, 20, 0],
  [24, 1, 30, 1],
  [30, 2, 50, 1],
  [32, 1, 50, 0],
  [40, 2, 55, 1],
  [45, 1, 20, 1],
  [51, 2, 60, 0],
  [60, 1, 65, 1],
  [65, 2, 15, 0],
];

// Funktio jolla ylläoleva taulukko muutetaan objekteiksi
function arrayConverter(array) {
  const arr = [];
  array.forEach((elem) => {
    arr.push({
      ika: elem[0],
      sukupuoli: elem[1],
      vTulot: elem[2],
      ostanut: elem[3] === 1 ? true : false,
    });
  });
  return arr;
}

// Objekteiksi muunnettu harjoitusdata tallennetaan muuttujaan
const trainingData = arrayConverter(data);
console.log(trainingData);

// Määritellään luokan nimi ja sen ominaisuudet
const className = 'ostanut';
const features = ['ika', 'sukupuoli', 'vTulot'];

// Testidatalla evaluoidaan algritmin paikkansa pitävyyttä.
const testData = [
  { ika: 18, sukupuoli: 1, vTulot: 10, ostanut: false },
  { ika: 30, sukupuoli: 2, vTulot: 50, ostanut: true },
  { ika: 45, sukupuoli: 1, vTulot: 20, ostanut: true },
  { ika: 65, sukupuoli: 2, vTulot: 15, ostanut: false },
];

// Luodaan uusi päättelypuu olio ja annetaan sille luokan nimi ja ominaisuudet
const myDt = new Decisiontree(className, features);

// Hajroitetaan puu harjoitusdatan avulla.
myDt.train(trainingData);
console.log(myDt);
// Evaluoidaan puun tuottama tulos. Mitä lähempänä 0 evaluinnin tulos on sen tarkempi on puun antama tulos.
console.log(myDt.evaluate(testData));
// Ennustetaan puun avulla ostaako henkilö hilavitkuttimen
const predictable = { ika: 45, sukupuoli: 1, vTulot: 20 };
console.log(myDt.predict(predictable));
