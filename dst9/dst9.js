const Tree = require('bst-js');

function createTree(root, values) {
  const tree = new Tree(root).insert(...values);
  // values.forEach((x) => {
  //   tree.insert(x);
  // });
  return tree;
}

const root = 10;
const nums = [2, 6, 23, 1, 12, 21, 5];

const myTree = createTree(root, nums);

console.log(myTree);

console.log('depthFirst search');
myTree.depthFirst(function () {
  console.log(this.value);
});

console.log('breadthFirst search');
myTree.breadthFirst(function () {
  console.log(this.value);
});
module.exports = { createTree };
