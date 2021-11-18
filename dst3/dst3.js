//Luodaan setit koodareista ja heidän osaamista kielistään
const coderA = new Set(['JS', 'PHP', 'C#', 'Python']);
const coderB = new Set(['JS', 'Java', 'C++', 'Python']);
const coderC = new Set(['JS', 'Java', 'Perl', 'Ruby']);

//Koodarit taulukko sisältää koodarien setit
const coders = [coderA, coderB, coderC];

//union yhdistää coders taulukossa olevat setit uudeksi setiksi jossa
//on tieto mitä kieliä koodareiden keskuudessa osataan
const union = function (coders) {
  const codersUnion = new Set();

  //taulukon läpikäynti
  coders.forEach((coder) => {
    //Jokaisen coder setin läpikäynti
    coder.forEach((language) => {
      //Lisätään kieli uuteen settiin. Koska käytänmme settiä ei tarvitse
      //huolehtia jos joku osaa samaa kieltä kuin toinen koska set tietorakenne
      //hyväksyy vain uniikkeja arvoja eli jo lisättyjä arvoja ei lisätä uudestaan
      codersUnion.add(language);
    });
  });
  return codersUnion;
};

//haveCodeskill palauttaa tiedon osaako joku koodareista parametrinä annettua kieltä
const haveCodeSkill = function (coders, language) {
  const codersUnion = union(coders);

  return codersUnion.has(language);
};

module.exports = { union, haveCodeSkill };
