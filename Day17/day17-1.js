//Bài 1; tính tiền taxi:

var distance = 121; // quãng đường: km
var openPrice = 15000; // giá mở cửa
var shortPrice = 13500; // giá quãng đường đi ngắn
var longPrice = 11000; // đường dài
var discount = 10 / 100; // % giảm giá

if (distance > 0 && distance <= 1) {
  totalPrice = openPrice;
} else if (distance > 1 && distance <= 5) {
  totalPrice = openPrice;
  totalPrice += (distance - 1) * shortPrice;
} else if (distance > 5 && distance <= 120) {
  totalPrice = openPrice;
  totalPrice += 4 * shortPrice;
  totalPrice += (distance - 5) * longPrice;
} else {
  totalPrice = openPrice;
  totalPrice += 4 * shortPrice;
  totalPrice += (distance - 5) * longPrice;

  totalPrice = totalPrice - totalPrice * discount;
}
console.log("số tiền quý khách phải trả là:", totalPrice);

//Bài 2: tính tiền điện(các hệ số đc đơn giản hóa để dễ check)

var kWh = 340; // lượng điện tiêu thụ
var lever1 = 1; //1.678;
var lever2 = 2; //1.734;
var lever3 = 3; //2.014;
var lever4 = 4; //2.536;
var lever5 = 5; //2.834;
var lever6 = 6; //2.927;
var totalBill;

if (kWh > 0 && kWh <= 50) {
  totalBill = lever1 * kWh;
} else if (kWh > 50 && kWh <= 100) {
  totalBill = lever1 * 50;
  totalBill += lever2 * (kWh - 50);
} else if (kWh > 100 && kWh <= 200) {
  totalBill = lever1 * 50;
  totalBill += lever2 * 50;
  totalBill += lever3 * (kWh - 100);
} else if (kWh > 200 && kWh <= 300) {
  totalBill = lever1 * 50;
  totalBill += lever2 * 50;
  totalBill += lever3 * 100;
  totalBill += lever4 * (kWh - 200);
} else if (kWh > 300 && kWh <= 400) {
  totalBill = lever1 * 50;
  totalBill += lever2 * 50;
  totalBill += lever3 * 100;
  totalBill += lever4 * 100;
  totalBill += lever5 * (kWh - 300);
} else {
  totalBill = lever1 * 50;
  totalBill += lever2 * 50;
  totalBill += lever3 * 100;
  totalBill += lever4 * 100;
  totalBill += lever5 * 100;
  totalBill += lever6 * (kWh - 400);
}
console.log("tiền điện tháng này:", totalBill);

//Bài 3: tính biểu thức

// var s = 0;
// var n = 4;
// for (var i = 0; i <= n; i++) {
//   s = s + i * (i + 1);
// }
// console.log(s);

// // Bài 4:kiểm tra số nguyên tố:
// function primeNumber(n) {
//   var check = true; // Biến check

//   // Nếu n bé hơn 2 => không phải số nguyên tố
//   if (n < 2) {
//     check = false;
//   } else if (n == 2) {
//     check = true;
//   } else if (n == 3) {
//     check = true;
//   } else if (n % 2 == 0) {
//     check = false; //check các số chẵn chia hết cho 2
//   } else {
//     // lặp từ 3 tới căn bậc 2 của n với các ước số lẻ
//     for (var i = 3; i < Math.sqrt(n); i += 2) {
//       if (n % i == 0) {
//         check = false;
//         break;
//       }
//     }
//   }
//   // Kiểm tra biến check
//   if (check == true) {
//     document.write(n + " là số nguyên tố <br/>");
//   } else {
//     document.write(n + " không phải là số nguyên tố <br/>");
//   }
// }
// primeNumber(3);

//Bài 5: in ra màn hình tam giác số:
function triangleNumber(m) {
  var x = 0;
  for (var i = 0; i < m; i++) {
    for (var j = m - i; j <= m; j++) {
      var x = x + 1;
      document.write(`${x}`);
    }

    document.write(`<br/>`);
  }
}
triangleNumber(5);
