const readline = require('readline-sync');

// Funktio kerää merkkejä merkkijonoon niin kauan kunnes käyttäjä syöttää # merkin.
function collectFeed() {
  // Alustetaan muuttujaan tyhjä merkkijono
  let str = '';
  // While break rakenteella merkkejä kerätään kunnes käyttäjä syöttää # merkin
  while (true) {
    const input = readline.question('anna merkki: ');
    if (input === '#') {
      break;
    } else {
      // Lisätään merkki muuttujaan
      str += input;
    }
  }
  return str;
}

// console.log(collectFeed());

module.exports = collectFeed;
