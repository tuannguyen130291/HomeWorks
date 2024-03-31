var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};
function getError(field) {
  var arrKey = field.split(".");
  return errors[arrKey[0]][arrKey[1]] || errors[arrKey[0]]["required"];
}

console.log(getError("name"));
console.log(getError("email"));
console.log(getError("password"));
console.log(getError("name.min"));
console.log(getError("email.unique"));
