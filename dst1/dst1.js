const scores1 = [32, 14, 20];

//setScore(scores, newscore) lisää uuden tuloksen taulukkoon
const setScore = function (scores, newscore) {
  scores.push(newscore);
};

//etScores(scores) palauttaa kaikki tulokset
const getScores = function (scores) {
  return scores;
};

//latest(scores) palauttaa viimeisimmän tuloksen
const latest = function (scores) {
  return scores[scores.length - 1];
};

//highest(scores) palauttaa parhaan tuloksen
const highest = function (scores) {
  return Math.max(...scores);
};

//topThree(scores) palauttaa kolme parasta tulosta
const topThree = function (scores) {
  //kopiodaan taulukko spread syntaksilla
  scoresCopy = [...scores];

  //Järjestetään taulukko uudestaan laskevaan järjestykseen
  scoresCopy.sort((a, b) => {
    return b - a;
  });
  //Palautetaan kolme ensimmäistä alkioita järjestetystä taulukosta
  return scoresCopy.slice(0, 3);
};

setScore(scores1, 40);
console.log(topThree(scores1));
console.log(scores1);

module.exports = { setScore, getScores, latest, highest, topThree };
