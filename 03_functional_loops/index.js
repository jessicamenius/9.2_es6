const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcom", age: 15 },
];

// for (let i = 0; i < moviePatrons.length; i++) {
//   console.log(moviePatrons[i].name);
// }

// moviePatrons.forEach((element) => console.log(element));

// moviePatrons.forEach((item) => console.log(item.name));

// moviePatrons.forEach((item, index) => console.log(item.name, index));

// moviePatrons.forEach((patrons, index) => console.log(patrons.name, index));

// const allowed = moviePatrons.filter((patrons) => {
//   return patrons.age > 17;
// });

// console.log(allowed);

// arrow function makes it much better, less code

// const allowed = moviePatrons.filter(function (patrons) {
//   return patrons.age > 17;
// });

const allowed = moviePatrons.filter((patrons) => patrons.age > 17);

console.log(allowed);

// let allowed = moviePatrons.filter((patrons) => patrons.age > 17);

// allowed = "BORKED";

// console.log(allowed);

// const newArr = ["fun", "js", "cool"];

// // either works in this section, but map makes more sense when changing as iterating through

// newArr.map((element) => {
//   console.log(element + "!");
// });

// newArr.forEach((element) => {
//   console.log(element + "!");
// });

// newArr.map((element) => console.log(element + "!"));

// newArr.map((element, index) => console.log(element + "!", index));

// newArr.map((i) => console.log(i + "!"));

// // you can call the first item whatever you want, it is always the element that is being called,  the 2nd is always the index
// // good naming conventions matter

// newArr.map((blank, foobar) => console.log("!", foobar));

// newArr.map((element, foobar) => console.log(element + "!", foobar));

// newArr.map((element, index) => console.log(element + "!", index));
