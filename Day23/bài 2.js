// create object function:
function createPerson(name, age, address) {
  return {
    name: name,
    age: age,
    address: address,
  };
}
// create customers array:
const customers = [
  createPerson("Nguyễn Văn A", 28, "Hà Nội"),
  createPerson("Nguyễn Văn B", 29, "Huế"),
  createPerson("Nguyễn Văn C", 30, "HCM"),
];
console.log(customers);

function createCustomers(person) {
  person.sort(function (a, b) {
    return a.age - b.age;
  });
  // add shortName:
  person.forEach(function (properties) {
    var surname = properties.name.slice(0, properties.name.indexOf(" "));
    var firstName = properties.name.slice(
      properties.name.indexOf(" ", surname.length + 1)
    );
    properties.shortName = surname + firstName;
  });
}
// console.log(properties.shortName);
result = createCustomers(customers);
