const readline = require('readline-sync');

// collectFeedRec kerää merkkejä merkkijonoon kunnes käyttäjä syöttää # merkin.
// Koska funktio on toteutettu rekursiivisesti se saa parametrikseen tyhjän merkkijonon.
function collectFeedRec(str = '') {
  const input = readline.question('anna merkki: ');
  if (input === '#') {
    return str;
  } else {
    str += input;
  }
  // Funktio kutsuu itseään koska kyseessä on rekursio
  return collectFeedRec(str);
}

// console.log(collectFeedRec());

module.exports = collectFeedRec;
