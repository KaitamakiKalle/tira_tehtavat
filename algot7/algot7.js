// Haetaan kirjasto polynomista regressioita varten
const PolynomialRegression = require('ml-regression-polynomial');

// predictPopulation ennustaa väkiluvun kasvua annetujen parametrien perusteella
function predictPopulation(vuosi, x, y, degree) {
  // Kun luodaan regression olio se laskee kulma kertoimen tunnetujen arvojen perusteella. degree säätää suoran "jyrkyyttä"
  // millä voidaan säätää tulosta paremmaksi.
  const regression = new PolynomialRegression(x, y, degree);

  // Palautetaan kokonaisluvuksi pyöristetty arvio väkiluvusta annettuna vuonna kirjaston _predict metodia hyödyntäen
  return Math.round(regression._predict(vuosi));
}
const x = [1960, 1970, 1980, 1990, 2000, 2010];

const y = [2, 4, 6, 10, 18, 33];
const degree = 3;

const vLuku2020 = predictPopulation(2020, x, y, degree);
const vLuku2050 = predictPopulation(2050, x, y, degree);
const vLuku2100 = predictPopulation(2100, x, y, degree);

console.log(vLuku2020);
console.log(vLuku2050);
console.log(vLuku2100);
