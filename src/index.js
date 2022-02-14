module.exports = function check(str, bracketsConfig) {
  let arr = bracketsConfig.map(x => x.join(''));
  let i = 0
  while (i < arr.length) {
    if (str.indexOf(arr[i]) != -1) {
      str = str.replace(arr[i], '');
      i = 0;
    } else {
      i++;
    }
  }
    return (str.length === 0);
  }
  