const Queue = require('queue-fifo');

function makeQueue(arr) {
  const queue = new Queue();
  arr.forEach((ele) => {
    queue.enqueue(ele);
  });
  return queue;
}
function checkQueue(myQueue, stopper) {
  while (true) {
    if (myQueue.peek() >= stopper) {
      break;
    } else {
      myQueue.dequeue();
    }
  }
  return myQueue;
}

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
console.log(checkQueue(queue1, 10));
console.log(clearQueue(queue1));

module.exports = { makeQueue, checkQueue, clearQueue };
