//genString funktio otettu edellisestä tehtävästä.
const { genString } = require('../algot5/algot5.js');

function findLcs(s1, s2) {
  let lcsLength = 0;
  let lcsLast = 0;
  let lcs = '';
  const lcsArr = [];
  for (let i = 0; i < s1.length; i++) {
    lcsArr[i] = [];
    for (let j = 0; j < s2.length; j++) {
      lcsArr[i][j] = 0;
    }
  }

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (i > 0 && j > 0 && s1[i] === s2[j]) {
        lcsArr[i][j] = lcsArr[i - 1][j - 1] + 1;
        // Jos i tai j on arvoltaan 0 ainut mahdollisuus on asettaa matriisin [i][j] paikalle arvo yksi
        // koska jos käytettäisiin puskuria niin arvo olisi matriisi[i - 1 = 0][j - 1 = 0] + 1
      } else if ((i === 0 || j === 0) && s1[i] === s2[j]) {
        lcsArr[i][j] = 1;
      }

      if (lcsArr[i][j] > lcsLength) {
        lcsLength = lcsArr[i][j];

        lcsLast = j;
      }
    }
  }

  if (lcsLength === 0) {
    return 'No common substring';
  } else {
    for (let i = lcsLast; i <= lcsLast + (lcsLength - 1); i++) {
      lcs += s2[i - (lcsLength - 1)];
    }
    return lcs;
  }
}

const str1 = genString('ATGC', 15044);
const str2 = genString('ATGC', 15044);
// const str1 = 'qwertyuiop';
// const str2 = 'rtyuiop';
const lcs = findLcs(str1, str2);
console.log(lcs);

module.exports = { findLcs, genString };
