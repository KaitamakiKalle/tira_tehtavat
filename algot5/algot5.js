// getAllSubstrs palauttaa annetun merkkijonon kaikki alimerkkijonot
function getAllSubstrs(str) {
  const subStrings = [];

  // Käydään merkkijono läpi kahdella silmukalla
  for (let i = 0; i < str.length; i++) {
    // Jos haluttaisiin että yksittäisi kirjaimia ei otettaisi mukaan määriteltäisiin silmukkaan j = i + 2
    for (let j = i + 1; j <= str.length; j++) {
      // Poimitaan slicella alimerkkijono
      subStrings.push(str.slice(i, j));
    }
  }
  return subStrings;
}

//findLcsBrute etsii kahdesta merkkijonosta pisimmän yhteisen alimerkkijonon
function findLcsBrute(s1, s2) {
  // Etsitään alimerkkijonot kummastakin stringistä
  const s1Subs = getAllSubstrs(s1);
  const s2Subs = getAllSubstrs(s2);

  // Kerätään kaikki yhteiset alimerkkijonot intersection muuttujaan.
  const intersection = s1Subs.filter((elem) => s2Subs.includes(elem));
  // käydään intersection reducella läpi joka vertailee aina edellistä tulosta seuraavaan alkioon
  // ja palauttaa tässä tapauksessa pisimmän merkkijonon.
  // viimeinen parametri määrittää mihin taulukon ensimmäistä alkioita verrataan.
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

// genString luo n mittaisen merkkijonon arpomalla kirjaimia charset parametrtissa syötetyistä vaihtoehdoista
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

const str1 = genString('ATGC', 10);
const str2 = genString('ATGC', 10);
const lcs = findLcsBrute(str1, str2);

console.log(lcs);

module.exports = { getAllSubstrs, findLcsBrute, genString };
