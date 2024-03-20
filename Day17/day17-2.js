//Bài 6: in ra màn bàn cờ vua:
//Bài 7: in ra màn hình bản cửu chương:

for (i = 1; i <= 9; i++) {
  for (j = 1; j <= 9; j++) {
    document.write(`${i} x ${j} = ${i * j} <br>`);
  }
  document.write(`</br>`);
}

function sum(n) {
  if (n == 1) {
    return 1;
  }
  return 1 / n + sum(n - 1);
}
sum(4);
console.log(sum(4));
