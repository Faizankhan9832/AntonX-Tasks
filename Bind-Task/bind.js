// // let person = {
// //     name: "Ali",

// //     sayName: function() {
// //         console.log( this.name );
// //     }
// // };

// // person.sayName();

// // function greet() {
// //     console.log(this.name);
// // }

// // let user = {
// //     name: "Faizan"
// // };
// // greet.call(user);


// function greet() {
//     console.log(this.name);
// }

// let user = {
//     name: "Faizan"
// };

// let newGreet = greet.bind(user);
// newGreet(); // Output: "Faizan"

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let person1 = new Person("Faizan", 20);
// let person2 = new Person("Ali", 25);
// console.log(person1.name ,person1.age ); // Output: "Faizan"
// console.log(person2.age); // Output: 25



// const person = {
//     name: "Faizan",
//     age: 20,

//     introduce: function (city) {
//         console.log(this.name, this.age, city);
//     }
// };

// const student = {
//     name: "Ali",
//     age: 22
// };

// const teacher = {
//     name: "Ahmed",
//     age: 35
// };

// const fn = person.introduce;

// fn("Peshawar"); // faizan , 20, Peshawar

// fn.call(student, "Lahore");   // Ali, 22, Lahore

// fn.apply(teacher, ["Islamabad"]);   // ahmed , 35 ,islamabad

// const boundFn = person.introduce.bind(student);

// boundFn("Karachi"); // ali 22 karachi

// Object.setPrototypeOf(student, teacher);

// student.introduce = person.introduce;

// student.introduce("Quetta");

// console.log(student.name);
// console.log(student.__proto__.name);


// const person = {
//   name: "Ali",
//   hobbies: ["reading", "coding"],
//   showHobbies: function() {
//     this.hobbies.forEach(function(hobby) {
//       console.log(this.name + " likes " + hobby);
//     });
//   }
// };
// person.showHobbies();
// // ❌ Error: `this` inside the callback is not `person`
// // It falls back to default binding (undefined in strict mode).


const user = {};
user.name = "Ali";           // normal property → shows up
user.secret = "123";         // we'll hide this one

Object.defineProperty(user, "secret", {
  value: "123",
  enumerable: false  // hidden from lists
});

console.log(Object.keys(user)); // ["name"] — secret is not listed
console.log(user.secret);       // "123" — but still works if you know the name

const obj = {};
Object.defineProperty(obj, "id", {
  value: 1,
  configurable: false  // locked in place
});

delete obj.id;  // Doesn't work
console.log(obj.id); // Still 1

const account = { username: "ali123" };

Object.defineProperty(account, "password", {
  value: "secret",
  enumerable: false  // hidden from Object.keys and for...in
});

console.log(Object.keys(account)); 
// ["username"] — password not shown

console.log(account.password); 
// "secret" — still works directly