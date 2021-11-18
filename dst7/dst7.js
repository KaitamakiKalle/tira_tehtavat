/* eslint-disable new-cap*/

const L = require('simple-double-linked-list');

const track1 = 'Megadeth - tornado of souls';
const track2 = 'Trivium - rain';
const track3 = 'Testament - more than meets the eye';
const track4 = 'Nightwish - ever dream';
const track5 = 'Chris cornell - you know my name';

const songArr = [track1, track2, track3, track4, track5];

const listFromArray = function (arr) {
  const list = new L.List();

  arr.forEach((elem) => {
    list.AddFront(elem);
  });

  return list;
};

const print = function (list) {
  for (const item = list.Begin(); !item.IsAtEnd(); item.Next()) {
    console.log(item.Value());
  }
};

// const printReverse = function (list) {
//   const iterator = list.End();
//   let counter = list.Size();
//   while (counter >= 0) {
//     console.log(iterator.Value());
//     iterator.Previous();
//     counter--;
//   }
// };

const printReverse = function (list) {
  let counter = list.Size();
  for (const item = list.End(); counter >= 0; item.Previous()) {
    console.log(item.Value());
    counter--;
  }
};

const insertToIndex = function (list, index, item) {
  if (index < 0 || index > list.Size()) {
    return false;
  } else {
    const iterator = list.Begin();

    for (let i = 0; i < index - 1; i++) {
      iterator.Next();
    }
    list.InsertAfter(item, iterator);
    return true;
  }
};

const removeFromIndex = function (list, index) {
  if (index < 0 || index > list.Size()) {
    return false;
  } else {
    const iterator = list.Begin();
    for (let i = 0; i < index; i++) {
      iterator.Next();
    }
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
