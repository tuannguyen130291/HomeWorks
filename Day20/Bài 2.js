// hàm kiểm tra số nguyên tố:

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var total = 0; //tổng các số nguyên tố có trong mảng
var count = 0; // biến đếm số lượng các số nguyên tố
for (var j = 0; j < arr.length; j++) {
  if (isPrime(arr[j]) === false) {
    continue;
  } else {
    total += arr[j];
    count++;
  }
}
if (count === 0) {
  console.log(`không có số nguyên tố trong mảng`);
} else {
  console.log(
    ` giá trị  trung bình các số nguyên tố có trong mảng là:${total / count}`
  );
}
