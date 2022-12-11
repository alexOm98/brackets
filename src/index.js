module.exports = function check(str, bracketsConfig) {
  const obj = Object.fromEntries(bracketsConfig);
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    str[i] === obj[stack.at(-1)] ? stack.pop() : stack.push(str[i]);
  }
  return !stack.length
}
  