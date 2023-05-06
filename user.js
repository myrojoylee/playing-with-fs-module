// const getName = () => {
//   return "Myro";
// };

// const getBirthPlace = () => {
//   return "The Philippines";
// };

// const dateOfBirth = "09.22.1982";

// exports.getName = getName;
// exports.getBirthPlace = getBirthPlace;
// exports.dob = dateOfBirth;

class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getUserInfo() {
    return `
        Name: ${this.name}
        Age: ${this.age}
        Email: ${this.email}
        `;
  }
}

const pie = "apple";

const predictable = () => 1;

module.exports = User;
module.exports = {
  pie,
  predictable,
};
module.exports = {
  sum: (a, b) => a + b,
  difference: (a, b) => a - b,
  product: (a, b) => a * b,
  quotient: (a, b) => a / b,
};
