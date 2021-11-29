// Bayesin naiivia klassifikaatiota varten haettu kirjasto
const BayesClassifier = require('bayes-classifier');
const mailClassifier = new BayesClassifier();

// goodMail sisältää hyvän postin, algoritmi oppii tästä mitä sanoja esiintyy ja kuinka usein hyvässä postissa
const goodMail = [
  'Tärkeää asiaa lainahakemuksestanne',
  'Tervehdys täältä pohjoisesta isovanhemmiltasi',
  'Moi, milloin ehitisimme tavata',
  'Hei, tilauksenne on lähetetty',
  'Pyytämäsi tarjous autosta',
];

// trashMail sisältää roskapostin, algoritmi oppii datan perusteella mitä sanoja esiintyy paljon roskapostissa
const trashMail = [
  'NYT SUPERHYPER TARJOUSPÄIVÄT',
  'Oletko jo nähnyt uudet tarjouksemme',
  'Voit voittaa tässä kilpailussa jopa 10000 euroa',
  'Tiesitkö tästä ihmeaineesta joka saa lihaksesi kasvamaan vauhdilla',
];

//Luodaan luokittelut Normal ja Trash ja syötetään parametreina harjoitusdata
mailClassifier.addDocuments(goodMail, 'Normal');
mailClassifier.addDocuments(trashMail, 'Trash');

// Harjoitetaan algoritmi
mailClassifier.train();

// classify metodi luokitelee annetun tekstin normaaliksi tai roskapostiksi
console.log(mailClassifier.classify('Hei, asiaa vakuutuksestanne'));
console.log(mailClassifier.classify('NYT ULTRAHYPER TARJOUS vain tänään'));
console.log(mailClassifier.classify('Tässä pyytämäsi liittymätarjous'));
console.log(
  mailClassifier.classify(
    'Osallistu kilpailuun josta voit voittaa huikeita palkintoja'
  )
);

/*
Bayesin naiivi klassifikaatio toimii keräämällä sanoja sille annetusta "opetus" datasta. Esimerkiksi tässä
tapauksessa kun kyseessä on roskapostin luokittelu se kerää sanoja ja katsoo kuinka usein ne esiintyvät roska tai/ja
normaalissa postissa. Tästä pystytään laskemaan millä todennäköisyydellä sanat esiintyvät roska tai normaalissa postissa.
Seuraavaksi lasketaan postien määrästä kuinka suurella todennäköisyydellä posti on roska tai normaalia postia. Näiden tietojen
avulla voidaan laskea "tulos" sille onko posti roskapostia ja normaaliapostia ja näitä kahta tulosta vertailemalla päätetään
kumpaan luokkaan posti kuuluu.
*/
// Algoritmi on naiivi koska se ei välitä ollenkaan sanojen järjestyksestä. Se ei siis tunne kielioppia eikä ymmärrä
// Sanojen yhteyksiä tai lauseita. Se katsoo dataa vain ikään kuin kasana sanoja.
