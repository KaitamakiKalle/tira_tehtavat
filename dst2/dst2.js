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

const sum = function (shop) {
  let sum = 0;

  for (const value of shop.values()) {
    if (typeof value === 'number') {
      sum += value;
    }
  }
  return sum;
};

const createSumMap = function (key, ...shops) {
  const sumMap = new Map();

  shops.forEach((shop) => {
    const name = shop.get(key);
    sumMap.set(name, sum(shop));
  });

  return sumMap;
};

const minValueMap = function (mapX) {
  let minValue = Number.MAX_VALUE;
  let minValueKey = '';

  mapX.forEach((value, key) => {
    if (typeof value === 'number' && value < minValue) {
      minValue = value;
      minValueKey = key;
    }
  });

  return new Map([[minValueKey, minValue]]);
};

console.log(
  minValueMap(createSumMap('nimi', xkauppamap, ykauppamap, zkauppamap))
);

module.exports = { sum, createSumMap, minValueMap };
