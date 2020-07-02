const me = {
  name: "Jessica",
  age: "36",
  live: "St. Louis",
};

//best
// destructure name or age (must match what is in the previous defined object)
const { name, age } = me;

console.log(name, age);

//lame
const name = me.name;
const age = me.age;

console.log(name, age);

// this overrides place in memory

// const you = me;

// you.name = "Bob";

// use rest operator to spread

const you = { ...me };
you.name = "Bob";

// console.log(me);
// console.log(you);

let arr1 = ["Jessica", "Marie"];

// console.log(...arr1);
// console.log([...arr1, "Menius"]);
// console.log(...arr1, "Menius");

function sayStuff(arg1, arg2) {
  console.log(arg1);
  console.log(arg2);
}

// sayStuff(...arr1);
