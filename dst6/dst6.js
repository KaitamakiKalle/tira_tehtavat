//Käytetään npm:stä haettua pino kirjastoa
const Stack = require('stack-lifo');

//reverseString kääntää annetun stringin väärinpäin
//Eli merkit asetetaan päinvastaiseen järjestykseen hyödyntäen pinoa
function reverseString(str) {
  const stack = new Stack();
  //strs muutujaan tallennetaan käännetty string
  let strs = '';
  //Lisätään jokainen merkkijonon merkki pinoon yksitellen
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  console.log(stack);
  //Kun merkit poistetaan pinosta ne tulevat automaattisesti päinvastaisessa järjestyksessä ulos
  //Tämä johtuu siitä että pinoon voidaan suorittaa toimenpiteitä aina vain pinon päällimmäiseen alkioon
  while (stack.size() > 0) {
    //Lisätään merkki poistaessa strs muuttujaan
    strs += stack.pop();
  }
  console.log(strs);
  //Palautetaan strs string joka on siis alkuperäinen string käännettynä
  return strs;
}

//isPalindrome tarkastaa onko jokin merkkijono palindromi
function isPalindrome(str) {
  //"poistetaan" replace metodilla välilyönnit
  //oikeasti replace vaihtaa annetun merkin mukaiset merkit annettuun merkkiin.
  // esim. voisimme vaihtaa merkkijonon kaikki ä kirjaimet a kirjaimiksi
  str = str.replace(/ /g, '');
  //Tarkastellaan onko str sama kuin str käännettynä(käytetään reverseString funktiota stringin kääntämiseen)
  if (str === reverseString(str)) {
    return true;
  } else {
    return false;
  }
  //if lauseen voisi myös kirjoittaa ternary operaattorilla lyhyemmin
  // return str === reverseString(str) ? true : false;
}

module.exports = { reverseString, isPalindrome };
