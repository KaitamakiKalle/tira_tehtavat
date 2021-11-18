/* eslint-disable camelcase */
const DecisionTree = require('decision-tree');
const training_data = [
  { color: 'blue', shape: 'square', liked: false },
  { color: 'red', shape: 'square', liked: false },
  { color: 'blue', shape: 'circle', liked: true },
  { color: 'red', shape: 'circle', liked: true },
  { color: 'blue', shape: 'hexagon', liked: false },
  { color: 'red', shape: 'hexagon', liked: false },
  { color: 'yellow', shape: 'hexagon', liked: true },
  { color: 'yellow', shape: 'circle', liked: true },
];

const test_data = [
  { color: 'blue', shape: 'circle', liked: false },
  { color: 'red', shape: 'hexagon', liked: false },
  { color: 'yellow', shape: 'hexagon', liked: true },
  { color: 'yellow', shape: 'circle', liked: true },
];
const class_name = 'liked';
const features = ['color', 'shape'];
const dt = new DecisionTree(class_name, features);
dt.train(training_data);
const predicted_class = dt.predict({
  color: 'blue',
  shape: 'circle',
});
const accuracy = dt.evaluate(test_data);

console.log(accuracy);
console.log(predicted_class);
