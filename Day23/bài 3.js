//  object create function

function createUsers(name, email, password) {
  return {
    name: name,
    email: email,
    password: password,
  };
}
// register create function;
var data = [];
function register(name, email, password) {
  if (!name || !email || !password) {
    console.log(`thiếu thông tin`);
    return;
  } else {
    data.push(createUsers(name, email, password));
    data.forEach(function (items) {
      items.role = "user";
    });
  }
}

// Login function create

function login(email, password) {
  for (i = 0; i < data.length; i++) {
    var user = data[i];
    if (user.email === email && user.password === password) {
      return user;
    }
  }
  return "Thông tin không hợp lệ";
}
register("Nguyến Văn A", "nguyenvana@gmail.com", "123457");
register("Nguyến Văn B", "nguyenvanb@gmail.com", "123456");
// register("Nguyến Văn C", "nguyenvanc@gmail.com", "123456");
console.log(data);

console.log(login("nguyenvana@gmail.com", "1234"));
