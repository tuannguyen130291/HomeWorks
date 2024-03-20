var arr = [1, "a", 2, 1, 5, "a"];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
  var contain = false;
  var currentValue = arr[i];

  for (j = 0; j < newArr.length; ++j) {
    if (newArr[j] === currentValue) {
      contain = true;
      break;
    }
  }
  if (contain === false) {
    newArr[newArr.length] = currentValue;
  }
}

console.log(newArr);
