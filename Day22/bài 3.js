var num = [3, 4, -1, 6];

function findMinPositive(arr) {
  var minPositive = Infinity;

  for (i = 0; i <= arr.length; i++) {
    if (arr[i] < minPositive && arr[i] > 0) {
      minPositive = arr[i];
    }
  }
  return minPositive;
}
// console.log(findMinPositive(num));

function findLackNumber(array) {
  let result = findMinPositive(array) + 1;
  while (true) {
    if (array.includes(result)) {
      result++;
    } else {
      break;
    }
  }
  return result;
}
// console.log(num.indexOf(findMinPositive(num)));
console.log(findLackNumber(num));
