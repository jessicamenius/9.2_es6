// const nums = [1, 2, 3];

// // console.log(nums);

// for (const value of nums) {
//   console.log(value);
// }

// in the array [index, value]
const movies = new Map([
  ["The Matrix", 1],
  ["The Matrix Reloaded", 2],
  ["Clueless", 5],
  ["Grease", 4],
]);

// console.log(movies);

// for (const [key, value] of movies) {
//   console.log(key, value);
//   console.log(key[0]);
// }

console.log(movies.get("The Matrix Reloaded"));
movies.set("Avatar", 5);
console.log(movies);

// using set, no need to wrap in array
