const Stack = require('stack-lifo');

function reverseString(str) {
  const stack = new Stack();
  let strs = '';
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  console.log(stack);
  while (stack.size() > 0) {
    strs += stack.pop();
  }
  console.log(strs);
  return strs;
}

function isPalindrome(str) {
  str = str.replace(/ /g, '');
  if (str === reverseString(str)) {
    return true;
  } else {
    return false;
  }
  // return str === reverseString(str) ? true : false;
}

module.exports = { reverseString, isPalindrome };
