var numbers = [8, 9, 7, 15, 6, 12];
var max = numbers[0];
var indexMax = 0;
for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
    indexMax = i;
  }
}
console.log(`max value:${max}`);
console.log(`index of max value:${indexMax}`);

// tìm min value:

var min = numbers[0];
var indexMin = 0;
for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
    indexMin = i;
  }
}
console.log(`min value:${min}`);
console.log(`index of min value:${indexMin}`);
