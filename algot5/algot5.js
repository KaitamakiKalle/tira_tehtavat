function getAllSubstrs(str) {
  const subStrings = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      subStrings.push(str.slice(i, j));
    }
  }
  return subStrings;
}

function findLcsBrute(s1, s2) {
  const s1Subs = getAllSubstrs(s1);
  const s2Subs = getAllSubstrs(s2);

  const intersection = s1Subs.filter((elem) => s2Subs.includes(elem));

  const lcs = intersection.reduce((a, b) => (a.length > b.length ? a : b), '');

  // Alla sama toiminnallisuus tehtynä perinteisellä ei funktionaalisella tavalla.

  // const intersection = [];

  // s1Subs.forEach((x) => {
  //   s2Subs.forEach((y) => {
  //     if (x === y) {
  //       intersection.push(x);
  //     }
  //     // if (x.length > lcs) {
  //     //   lcs = x;
  //     // }
  //   });
  // });

  // let lcs = '';
  // intersection.forEach((elem) => {
  //   if (elem.length > lcs.length) {
  //     lcs = elem;
  //   }
  // });

  return lcs;
}

function genString(charset, n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    str += charset[Math.floor(Math.random() * charset.length)];
  }

  // Alla sama toiminnallisuus tehty hyödyntäen taulukkoa kuten tehtävän annossa sanottiin.
  // Tein lopullisen tehtävän kuitenkin tunti esimerkin pohjalta jossa taulukkoa ei käytetty.

  // const arr = [];
  // for (let i = 0; i < n; i++) {
  //   arr.push(charset[Math.floor(Math.random() * charset.length)]);
  // }
  // return arr.join('');

  return str;
}

// const str1 = genString('ATGC', 100);
// const str2 = genString('ATGC', 100);
// const lcs = findLcsBrute(str1, str2);
// console.log(lcs);

module.exports = { getAllSubstrs, findLcsBrute, genString };
