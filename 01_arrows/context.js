var person = {
  name: "Mario",
  saySomething: function () {
    console.log("It sa me");
    // setTimeout is a function
    setTimeout(() => {
      console.log(this.name);
    }, 500);
    // console.log(this);
  },
};

// console.log(person.name);

// console.log(person.saySomething);

person.saySomething();
