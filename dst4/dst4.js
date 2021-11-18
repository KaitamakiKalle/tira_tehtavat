//Rakennettaan set tietorakenne itse luokan avulla
class MySet {
  //konstruktoriin annetaan parametriksi taulukko. Oletusarvona tyhjä taulukko
  constructor(arr = []) {
    //tarkistetaan että taulukossa on vain uniikkeja alkioita
    this.arr = this.checkUnique(arr);
    //size property
    this.size = arr.length;
  }
  //checkUnique luo annetusta taulukosta uuden taulukon jossa on vain uniikkeja alkioita
  checkUnique(arr) {
    const uniques = [];
    arr.forEach((ele) => {
      //indexOf taulukon metodilla katsotaan ettei alkioita ole vielä lisätty uuteen taulukkoon
      if (uniques.indexOf(ele) === -1) {
        uniques.push(ele);
      }
    });
    return uniques;
  }
  //add metodilla voidaan lisätä settiin uusi alkio.
  add(data) {
    //Tarkistus ettei lisättävää alkiota ole jo setissä
    if (this.arr.indexOf(data) === -1) {
      this.arr.push(data);
      //kasvatetaan myös size propertyn määrää yhdellä
      this.size++;
      //palautetaan true jos alkio lisättiin onnistuneesti
      return true;
    } else {
      //palautetaan false jos alkioita ei lisätty esim. jos kyseinen alkio löytyy jo setistä
      return false;
    }
  }

  //Metodi alkion poistamiseen setistä
  remove(data) {
    //tarkistus että poistettava alkio löytyy setistä
    if (this.arr.indexOf(data) !== -1) {
      //splice toimii niin että ensimmäinen parametri kertoo mistä kohalta leikkaus aloitetaan ja toinen kuinka
      //monta "indexiä" poistetaan
      this.arr.splice(this.arr.indexOf(data), 1);
      this.size--;
      return true;
    } else {
      return false;
    }
  }

  //has metodi kertoo onko setissä kysyttyä alkiota
  has(data) {
    if (this.arr.indexOf(data) === -1) {
      return false;
    } else if (this.arr.indexOf(data) >= 0) {
      return true;
    }
  }

  //union metodi yhdistää kaksi tai useamman setin toisiinsa
  union(setA, ...sets) {
    sets.forEach((x) => {
      x.arr.forEach((y) => {
        setA.add(y);
      });
    });

    return setA;
  }
}
module.exports = MySet;
