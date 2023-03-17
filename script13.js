//Change the Prototype to a New Object
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
  };
  // Create a Dog object
  var dog1 = new Dog("Rufus");
  // Test the Dog object's properties and methods
  console.log(dog1.name);
  console.log(dog1.numLegs);
  dog1.eat();
  dog1.describe();