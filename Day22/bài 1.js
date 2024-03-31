// kiểm tra số nguyên tố

function isPrime(number) {
  if (number % 1 !== 0) {
    return false;
  }
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  var i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

/*Hàm tìm số đảo ngược */

function reverse_num(number) {
  number = number.toString();
  return +number.split("").reverse().join("");
}
// hàm kiểm tra đối xứng
function checkSymmetrical(number) {
  var flag = false;
  if (reverse_num(number) === number) flag = true;
  return flag;
}

// tìm số nguyên tố đối xứng

function findSymmetricPrime(number) {
  // var prime = number;
  // var found = false;
  // if (isPrime(prime) && isSymmetrical(prime)) {
  //   found = true;
  // } else
  //   while (!found) {
  //     prime++;
  //     if (isPrime(prime) && isSymmetrical(prime)) {
  //       found = true;
  //     }
  //   }
  // return prime;
  var result = number;
  while (!checkSymmetrical(result)) {
    result++;
  }
  if (!isPrime(result)) {
    return findSymmetricPrime(result + 1);
  }
  return result;
}

var givenNumber = 13;

var SymmetricPrime = findSymmetricPrime(givenNumber);
console.log(
  "Số nguyên tố đối xứng lớn hơn hoặc bằng",
  givenNumber,
  "là:",
  SymmetricPrime
);
