//Käytetään npm:stä haettua jono kirjastoa
const Queue = require('queue-fifo');

//makeQueue tekee jonon taulukosta
function makeQueue(arr) {
  const queue = new Queue();
  arr.forEach((ele) => {
    //enqueue metodi lisää alkion jonoon
    queue.enqueue(ele);
  });
  return queue;
}

//checkQueue poistaa alkioita jonosta niin kauan kunnes vastaan tulee stopper parametrin arvo
function checkQueue(myQueue, stopper) {
  //break while rakenne
  while (true) {
    //katsotaan onko seuraava alkio sama kuin stopper tai ettei jono ole tyhjä
    if (myQueue.peek() >= stopper || myQueue.isEmpty()) {
      break;
    } else {
      myQueue.dequeue();
    }
  }
  //kun stopper alkio tulee vastaan tai jono on tyhjä lopetetaan silmukan suoritus ja palautetaan jono
  return myQueue;
}

//clearQueue tyhjentää jonon ja palauttaa sen alkiot taulukossa
function clearQueue(queue) {
  const arr = [];
  while (queue.size() > 0) {
    arr.push(queue.dequeue());
  }
  return arr;
}

const arr1 = [1, 2, 3, 4, 5, 6, 10, 7, 8, 9];
const queue1 = makeQueue(arr1);
console.log(queue1);
console.log(checkQueue(queue1, 20));
console.log(clearQueue(queue1));

module.exports = { makeQueue, checkQueue, clearQueue };
