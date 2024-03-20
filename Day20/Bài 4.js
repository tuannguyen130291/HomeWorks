//b1
var arr = [5, 1, 8, 9, 10];
var element = 4;
for (var i = 0; i < arr.length - 1; i++) {
  var indexMin = i; // vị trí của giá trị nhỏ nhất ban đầu
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[indexMin]) {
      indexMin = j;
    }
  }
  //đổi chỗ indexMin lên vị trí đầu tiên
  if (indexMin !== i) {
    var template = arr[i];
    arr[i] = arr[indexMin];
    arr[indexMin] = template;
  }
}
// thêm phần tử nhỏ hơn vào mảng đã sắp xếp đầu mảng cho
var newArr = [];
for (var i = 0; i < arr.length - 1; i++) {
  if (arr[i] < element) {
    newArr[newArr.length] = arr[i];
  }
}
newArr[newArr.length] = element; //thêm element vào mảng mới
// thêm phần còn lại
for (var i = newArr.length - 1; i < arr.length; i++) {
  if (arr[i] > element) {
    newArr[newArr.length] = arr[i];
  }
}
console.log(arr);
console.log(newArr);
