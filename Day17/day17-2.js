//Bài 6: in ra màn bàn cờ vua:

function sum(n) {
  console.log(n);
  if (n == 1) return 1;
  else return sum(1 / (n - 1)) + 1 / n;
}
sum(5);
