// Haetaan kirjasto npm:stä puu tietorakennetta varten
const Tree = require('bst-js');

// createTree() luo puun annetuista arvoista
function createTree(root, values) {
  // Kun puu luodaan, sille annetaan parametrina root eli juuren arvo.
  // Tämän jälkeen ketjutettuna on insert() metodi joka sijoittaa anetut arvot puuhun.
  const tree = new Tree(root).insert(...values);
  return tree;
}

const root = 10;
const nums = [2, 6, 23, 1, 12, 21, 5];

const myTree = createTree(root, nums);

console.log(myTree);

console.log('depthFirst search');
// Suoritetaan depthFirst haku. Selitys haun toiminnasta löytyy tuloste.txt tiedostosta.
myTree.depthFirst(function () {
  console.log(this.value);
});

console.log('breadthFirst search');
// // Suoritetaan breadFirst haku. Selitys haun toiminnasta löytyy tuloste.txt tiedostosta.
myTree.breadthFirst(function () {
  console.log(this.value);
});
module.exports = { createTree };
