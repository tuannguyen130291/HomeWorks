var numbers1 = [1, 2];
var numbers2 = [3, 4];

var numbersTotal = numbers1.concat(numbers2);
var newArr = numbersTotal.sort();
console.log(newArr);
function findMedian(array) {
  var n = array.length;
  if (n % 2 === 0) {
    return (median = (array[n / 2 - 1] + array[n / 2]) / 2);
  } else return (median = array[(n - 1) / 2]);
}
findMedian(newArr);
console.log(`số trung vị của hai dãy số đã cho là:`, findMedian(newArr));
