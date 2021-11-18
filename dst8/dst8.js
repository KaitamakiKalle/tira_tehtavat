const Graph = require('graph-data-structure');

const values = [
  ['a', 'b', 7],
  ['a', 'c', 9],
  ['a', 'f', 14],
  ['b', 'c', 10],
  ['b', 'd', 15],
  ['c', 'd', 11],
  ['c', 'f', 2],
  ['d', 'e', 6],
  ['f', 'e', 9],
];

// createGraph funktiolla luot kaksiulotteisesta taulukosta verkon ja palautat sen
const createGraph = function (values) {
  const graph = new Graph();
  values.forEach((elem) => {
    graph.addEdge(...elem);
  });
  return graph;
};

// shortestDist funktiolla palautat pienimmän mahdollisen etäisyyden verkon graph solmujen x ja y välillä.
//Funktio on hyvin helppo toteuttaa kirjaston valmiin metodin ja propertyn avulla.
const shortestDist = function (graph, x, y) {
  return graph.shortestPath(x, y).weight;
};

// Tulosta verkko serialize() -metodilla.

// Suorita verkolle topologicalSort() -metodi ja tulosta sen lopputulos.
// Kirjoita kommenttiin miksi topologinen lajittelu tuottaa saamasi lopputuloksen.

//Tulosta lyhin etäisyys solmujen 'a' ja 'e' välillä.
const myGraph = createGraph(values);
console.log(myGraph.serialize());

/*Topologinen lajittelulla voidaan järjestää suunnattu verkko jonoksi.
Jonoon lisätään ensiksi solmu johon ei ole viittauksia mistään muusta solmusta. Tämän jälkeen voidaan lisätä vain solmu
johon viittaavissa solmuissa on jo käyty. Eli esimerksi jos jonossa on ensimmäisenä solmu a niin seuraava lisättävä solmu
ei voi olla c koska emme ole käyneet vielä b solmussa josta on myös viittaus c solmuun*/
console.log(myGraph.topologicalSort());

console.log(shortestDist(myGraph, 'a', 'e'));

module.exports = { createGraph, shortestDist };
