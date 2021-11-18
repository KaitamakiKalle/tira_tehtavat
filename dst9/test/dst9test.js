const funcs = require('../dst9.js');
const assert = require('chai').assert;

describe('Testing dst9 functions', function () {
  it('should export function', () => {
    assert.isFunction(funcs.createTree, 'Should be a function');
  });
  it('function createTree', () => {
    const root = 4;
    const nums = [1, 2, 3];

    assert.isObject(funcs.createTree(root, nums));

    const testArr = [];
    const testTree = funcs.createTree(root, nums);

    testTree.depthFirst(function () {
      testArr.push(this.value);
    });

    assert.deepEqual(testArr, [4, 1, 2, 3], 'testArr should equal [4,1,2,3]');
  });
});
