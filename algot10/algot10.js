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

function arrayConverter(array) {
  const arr = [];
  array.forEach((elem) => {
    arr.push({
      ika: elem[0],
      sukupuoli: elem[1] /* === 1 ? 'nainen' : 'mies'*/,
      vTulot: elem[2],
      ostanut: elem[3] === 1 ? true : false,
    });
  });
  return arr;
}

const trainingData = arrayConverter(data);
console.log(trainingData);

const className = 'ostanut';
const features = ['ika', 'sukupuoli', 'vTulot'];

const predictable = { ika: 45, sukupuoli: 1, vTulot: 20 };
const testData = [
  { ika: 18, sukupuoli: 1, vTulot: 10, ostanut: false },
  { ika: 30, sukupuoli: 2, vTulot: 50, ostanut: true },
  { ika: 45, sukupuoli: 1, vTulot: 20, ostanut: true },
  { ika: 65, sukupuoli: 2, vTulot: 15, ostanut: false },
];

const myDt = new Decisiontree(className, features);

myDt.train(trainingData);
console.log(myDt);

console.log(myDt.evaluate(testData));
console.log(myDt.predict(predictable));
