//Koska käytetyn kirjaston metodit on jostain syystä kirjoitettu isolla kirjaimella poistetaan eslintin tarkistus
//tähän tiedostoon pois käytöstä
/* eslint-disable new-cap*/

//Haetaan kirjasto npm:stä linkitettyä listaa varten
const L = require('simple-double-linked-list');

//Esitellään kappaleet omiin muuttujiinsa
const track1 = 'Megadeth - tornado of souls';
const track2 = 'Trivium - rain';
const track3 = 'Testament - more than meets the eye';
const track4 = 'Nightwish - ever dream';
const track5 = 'Chris cornell - you know my name';

const songArr = [track1, track2, track3, track4, track5];

//Funktio tekee annetusta taulukosta listan
const listFromArray = function (arr) {
  //Luodaan uusi lista
  const list = new L.List();

  arr.forEach((elem) => {
    //AddFront metodi lisää annetun alkion listaan
    list.AddFront(elem);
  });

  return list;
};

//print funktio tulostaa listan alkiot yksitellen
const print = function (list) {
  //Begin() metodi luo iteraattorin
  //IsAtEnd() katsoo onko iteraattori listan lopussa
  //Next() siirtää iteraattorin seuraavaan paikkaan
  for (const item = list.Begin(); !item.IsAtEnd(); item.Next()) {
    //Value() näyttää sen arvon minkä kohdalla iteraattori tällä hetkellä on
    console.log(item.Value());
  }
};

// Alla äskeinen toteutettuna while rakenteella

// const printReverse = function (list) {
//   const iterator = list.End();
//   let counter = list.Size();
//   while (counter >= 0) {
//     console.log(iterator.Value());
//     iterator.Previous();
//     counter--;
//   }
// };

//printReverse tulostaa listan päinvastaisessa järjestyksessä
const printReverse = function (list) {
  // alustetaan counter muuttuja jolla seurataan iteraattorin sijaintia listassa
  let counter = list.Size();
  //End() laittaa iteraattorin listan viimeiseen paikkaan
  //Previous() siirtää iteraattorin listan edelliseen paikkaan
  //counterilla seurataan milloin ollaan listan ensimmäisessä paikassa
  for (const item = list.End(); counter >= 0; item.Previous()) {
    console.log(item.Value());
    counter--;
  }
};

//insertToIndex lisää halutun alkion annetun listan haluttuun indexiin
const insertToIndex = function (list, index, item) {
  if (index < 0 || index > list.Size()) {
    return false;
  } else {
    //luodaan iteraattori
    const iterator = list.Begin();
    //siirretään iteraattori halutun indeksin edeltävään paikkaan. Tämä johtuu insertAfter metodin
    //toiminnasta joka lisää alkion iteraattorin jälkeiseen idenksiin.
    for (let i = 0; i < index - 1; i++) {
      iterator.Next();
    }
    //lisätään alkio insertAfter metodilla. Metodi lisää alkion iteraattorin jälkeiseen paikkaan.
    list.InsertAfter(item, iterator);
    return true;
  }
};

//Funktio alkion poistamiseksi annetusta indeksistä.
const removeFromIndex = function (list, index) {
  if (index < 0 || index > list.Size()) {
    return false;
  } else {
    //Luodaan iteraattori
    const iterator = list.Begin();
    for (let i = 0; i < index; i++) {
      iterator.Next();
    }
    //Remove metodi poistaa alkion iteraattorin osoittamasta paikasta.
    list.Remove(iterator);
    return true;
  }
};

const songList = listFromArray(songArr);
print(songList);
console.log();

insertToIndex(songList, 3, 'Iron maiden - the trooper');
removeFromIndex(songList, 4);
print(songList);
console.log();
printReverse(songList);
module.exports = {
  listFromArray,
  print,
  printReverse,
  insertToIndex,
  removeFromIndex,
};
