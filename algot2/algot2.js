const readline = require('readline-sync');

function collectFeedRec(str = '') {
  const input = readline.question('anna merkki: ');
  if (input === '#') {
    return str;
  } else {
    str += input;
  }
  return collectFeedRec(str);
}

// console.log(collectFeedRec());

module.exports = collectFeedRec;
