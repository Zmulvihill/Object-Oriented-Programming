//Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird() {
    let weight = 15;
  
    this.getWeight = function() {
      return weight;
    };
  }
  // create a new Bird object
const bird = new Bird();

// call the getWeight method on the bird object and store the result
const weight = bird.getWeight();

// log the weight to the console
console.log(weight);