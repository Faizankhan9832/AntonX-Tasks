// map()

// const numbers = [1, 2, 3, 4, 5];
// let newNum = numbers.map((num) =>num*2);
// console.log(newNum);

// const fruits = ["apple", "banana", "mango"];
// let newfruits = fruits.map((fruit) => fruit.toUpperCase())
// console.log(newfruits);


// const names = ["Ali", "Ahmed", "Faizan"];
// let newNam = names.map((name) => "mr  " + name);
// console.log(newNam);

// const students = [
//     { name: "Ali", age: 20 },
//     { name: "Sara", age: 22 },
//     { name: "Ahmed", age: 19 }
// ];
// let stdName = students.map(( sname) => sname.name)
// console.log(stdName);



//filter()

// const numbers = [2, 5, 8, 11, 14, 17];
// let Enum = numbers.filter((num) => num % 2 ===0)
// console.log(Enum);

// const words = ["cat", "elephant", "dog", "javascript"];
// let length = words.filter((word) => word.length >3)
// console.log(length);

// const ages = [12, 18, 25, 15, 30];
// let adult = ages.filter((age) => age >=18 , )
// console.log( adult);

// const names = ["Ali", "Ahmed", "Sara", "Ayesha", "Bilal"];
// let Aname = names.filter((name) => name.startsWith("A"))
// console.log(Aname);

//reduce()

// const numbers = [5, 10, 15, 20];
// let sum = numbers.reduce((acc , curr) => acc +curr , 0);
// let sum = numbers.reduce( function(acc , curr){
//     return acc + curr;
// },0)
// console.log(sum);

// const numbers = [2, 3, 4];
// let mul = numbers.reduce( function ( acc ,curr){
//     return acc * curr
// },1)
// console.log(mul);


// const numbers = [12, 45, 7, 89, 23];
// let larg = numbers.reduce(function (acc , curr){
//     if(curr <acc){
//         return acc
//     }
//     return curr
// })
// console.log(larg);


// const arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];
// let flat = arr.reduce((acc , curr) => acc.concat(curr), [])
// console.log(flat);