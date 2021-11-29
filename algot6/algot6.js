//genString funktio otettu edellisestä tehtävästä.
const { genString } = require('../algot5/algot5.js');

// findLcs etsii kahdesta merkkijonosta pisimmän yhteisen merkkijonon
function findLcs(s1, s2) {
  let lcsLength = 0;
  let lcsLast = 0;
  let lcs = '';
  // Luodaan taulukko johon tallennetaan läpikäydyt indeksit. Se siis toimii tiedon välivarastona.
  const lcsArr = [];
  // Generoidaan kaksi ulotteinen taulukko täyteen nollia. Taulukkoon tulee yksi ylimääräinen puskuririvi jotta vältytään undefined arvolta.
  for (let i = 0; i <= s1.length; i++) {
    lcsArr[i] = [];
    for (let j = 0; j <= s2.length; j++) {
      lcsArr[i][j] = 0;
    }
  }

  // Käydään merkkijonoja läpi kahdella silmukalla
  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      // Jos i tai j on 0 tiedetään että ollaan vasta puskuririvin kohdalla joten jatketaan suoristusta eteenpäin
      if (!(i === 0 || j === 0)) {
        // Verrataan s1 merkkijonon kirjainta s2 merkkijonon kirjaimiin. Indeksit tulevat i ja j muuttujista.
        if (s1[i - 1] === s2[j - 1]) {
          // lisätään matriisiin arvo jos merkit täsmäävät. Arvo on matriisin edellisen rivin edellisen paikan arvo + 1
          // koska näin saadaan yhteisen alimerkkijonon pituus tallennettua.
          lcsArr[i][j] = lcsArr[i - 1][j - 1] + 1;
        }
        // Jos matriisiin tällä kieroksella tallennettu arvo on suurempi kuin pisimmän yhteisen alimerkkijonon pituus
        // Tulee siitä pisin yhteinen alimerkkijono
        if (lcsArr[i][j] > lcsLength) {
          lcsLength = lcsArr[i][j];

          // Tallennetaan myös yhteisen alimerkkijonon viimeisen kirjaimen indeksi jotta se voidaan rakentaa myöhemmin kasaan.
          lcsLast = j - 1;
        }
      }
    }
  }

  if (lcsLength === 0) {
    return 'No common substring';
  } else {
    // Rakennetaan pisin yhteinen alimerkkijono for loopin avulla.
    for (let i = lcsLast; i <= lcsLast + (lcsLength - 1); i++) {
      lcs += s2[i - (lcsLength - 1)];
    }
    return lcs;
  }
}

const str1 = genString('ATGC', 15043);
const str2 = genString('ATGC', 15043);
// const str1 = 'qwertyuiop';
// const str2 = 'rtyuiop';
const lcs = findLcs(str1, str2);
console.log(lcs);
module.exports = { findLcs, genString };
