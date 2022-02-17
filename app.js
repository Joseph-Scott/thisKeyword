const cat = {
  name: "Blue Steele",
  color: "grey",
  breed: "Scottish Fold",
  meow() {
    console.log("THIS IS:", this);
    console.log(`${this.name} says MEOWWWW`);
  },
};

const meow2 = cat.meow;
