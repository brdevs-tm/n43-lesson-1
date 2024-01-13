//homework

// 1

String.prototype.trm = function () {
  return this.trim();
};

let str = " hello";
console.log(str.trm());

//2

// String.prototype.upperCase = function () {
//   return this.toUpperCase();
// };

// let str = " hello";
// console.log(str.upperCase());

//3

// String.prototype.has = function (word) {
//   return this.includes(word);
// };

// let str = "how";
// console.log(str.has("o"));

//4

// String.prototype.cut = function (start, end) {
//   return this.slice(start, end);
// };

// let str = "hello";
// console.log(str.cut(1, 3));

//5
// String.prototype.rpt = function (num) {
//   return this.repeat(num);
// };

// let str = "hello";
// console.log(str.rpt(3));

//6
// Number.prototype.fixed = function () {
//   return this.toFixed();
// };

// let n = 3.6;
// console.log(n.fixed());

//7
// Number.prototype.round = function () {
//   return Math.round(this);
// };

// let n1 = 4.567;
// let n2 = 10.102;
// console.log(n1.round());
// console.log(n2.round());

//8
// Number.prototype.isSquare = function () {
//   return Math.sqrt(this) % 1 === 0;
// };

// let n = 9;
// console.log(n.isSquare());

//9
// Number.prototype.count = function () {
//   return Math.abs(this).toString().length;
// };

// let n = 9888888;
// console.log(n.count());

//10
// Number.prototype.sum = function () {
//   const numString = Math.abs(this).toString();
//   return Array.from(numString, Number).reduce((acc, digit) => acc + digit, 0);
// };

// let n = 9888888;
// console.log(n.sum());

//11
// function Animal(name, speed, limitAge) {
//   this.name = name;
//   this.speed = speed;
//   this.limitAge = limitAge;

//   Animal.prototype.info = function () {
//     return `Name: ${this.name}, Speed: ${this.speed}, Limit Age: ${this.limitAge}`;
//   };
// }

// const employ = new Animal("employ", "Fast", 15);

// console.log(employ.name);
// console.log(employ.speed);
// console.log(employ.limitAge);
// console.log(employ.info());

//12
// function Student(name, course, years, university) {
//   this.name = name;
//   this.course = course;
//   this.years = years;
//   this.university = university;
//   Student.prototype.leftYears = function () {
//     return `${Math.abs(course - 4)} yil qoldi`;
//   };
// }

// const tolib = new Student(
//   "Jahongir",
//   1,
//   2023,
//   "International Islamic Academy of Uzbekistan"
// );

// console.log(tolib.name);
// console.log(tolib.course);
// console.log(tolib.years);
// console.log(tolib.university);
// console.log(tolib.leftYears());

//13
// function Person(name, age, currentYear) {
//   this.name = name;
//   this.age = age;
//   this.currentYear = currentYear;

//   Person.prototype.getBirthYear = function () {
//     return `${currentYear - age} - yil tug'ilgan`;
//   };
// }

// const person = new Person("Vahid", 19, 2024);

// console.log(person.name);
// console.log(person.age);
// console.log(person.currentYear);
// console.log(person.getBirthYear());

//14
// function Employee(name, salary, workName, procent) {
//   this.name = name;
//   this.salary = salary;
//   this.workName = workName;
//   this.procent = this.procent;

//   Employee.prototype.increaseSalary = function () {
//     return `${procent}% oshgandan so'ng ${name}ning oyligi ${
//       salary + (salary * procent) / 100
//     }$ bo'ldi`;
//   };
// }

// const employ = new Employee("Vahid", 500, "Logistic operator", 10);

// console.log(employ.name);
// console.log(employ.salary);
// console.log(employ.workName);
// console.log(employ.increaseSalary());

//15
// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;

//   Rectangle.prototype.getArea = function () {
//     return `To'g'ri To'rtburchakning yuzasi: ${width * height} sm kvadrat`;
//   };
//   Rectangle.prototype.getPerimeter = function () {
//     return `To'g'ri To'rtburchakning perimetri: ${2 * (width + height)} sm`;
//   };
// }

// const rect = new Rectangle(10, 20);

// console.log(`Eni: ${rect.width}`);
// console.log(`Bo'yi: ${rect.height}`);
// console.log(rect.getArea());
// console.log(rect.getPerimeter());
