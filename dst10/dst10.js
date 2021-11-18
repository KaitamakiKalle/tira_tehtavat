const Heap = require('heap');

//Funktio keon luomiseksi taulukosta
function heapFromArr(arr) {
  const heap = new Heap();

  arr.forEach((ele) => {
    //kekoon lisätään alkioita push() metodilla
    heap.push(ele);
  });

  return heap;
}

const arr = [3, 2, 5, 4, 1];
const myHeap = heapFromArr(arr);

console.log(myHeap);

//pop poistaa default komparaatorilla luodusta keosta pienimmän alkion
myHeap.pop();

//pushpop lisää alkion ja poistaa heti perään pienimmän alkion
//Tässä tapauksessa 1 lisätään ja poistetaan heti koska se on lisäyksen jälkeen pienin alkio
myHeap.pushpop(1);

console.log(myHeap);

// toArray metodi tekee keosta taulukon ja palauttaa sen.
console.log(myHeap.toArray());
