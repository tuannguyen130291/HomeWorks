//hoán vị 2 biến

var a = -11;
var b = 18;
if ((a = !Number) && (b = !Number)) {
  console.log("nhập lại hai số a,b");
} else
 var a = a + b;
var b = a - b;
var a = a - b;
console.log("giá trị biến a =", a);
console.log("giá trị biến b =", b);

function replaceNumber(a,b){
    if(a= !Number && b=!Number) 
}

// tính giá trị biểu thức

var s = 10 + 20 + 5 ** 10 / 2;
console.log("giá trị biểu thức S =", s);

// tìm số lớn nhất

// function findMax(a,b,c){
//     var maxVal = a;
//     if (b > maxVal){maxVal = b};
//     if (c > maxVal){maxVal = c};
//     return maxVal;
// }
// console.log('giá trị lớn nhất là:',findMax(43,62,53));

// kiểm tra 2 số cùng dấu

var x = 5;
var y = 1;

if (x * y < 0) {
  console.log("x, y trái dấu");
} else {
  console.log("x, y cùng dấu");
}

var a = -1;
var b = -5;
var c = -10;
if (a < b && a < c) {
  if (b < c) {
    console.log("thứ tự tăng dần:", a, b, c);
  } else {
    console.log("thứ tự tăng dần:", a, c, b);
  }
} else if (b < a && b < c) {
  if (a < c) {
    console.log("thứ tự tăng dần:", b, a, c);
  } else {
    console.log("thứ tự tăng dần:", b, c, a);
  }
} else if (c < a && c < b) {
  if (a < b) {
    console.log("thứ tự tăng dần:", c, a, b);
  } else {
    console.log("thứ tự tăng dần:", c, b, a);
  }
}
