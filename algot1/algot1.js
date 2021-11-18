const readline = require('readline-sync');

function collectFeed() {
  let str = '';
  while (true) {
    const input = readline.question('anna merkki: ');
    if (input === '#') {
      break;
    } else {
      str += input;
    }
  }
  return str;
}

// console.log(collectFeed());

module.exports = collectFeed;
