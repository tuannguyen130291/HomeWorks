function findCoincident(arr1, arr2) {
  return arr1.filter(function (element) {
    return arr2.includes(element);
  });
}

var number1 = [1, 2, 3, 0, 4, 6];
var number2 = [1, 2, 4, 8, 11];
var result = findCoincident(number1, number2);
console.log(result);
