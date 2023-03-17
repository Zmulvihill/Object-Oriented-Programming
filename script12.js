//Understand the Constructor Property
function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
  }
  var dog1 = new Dog("Rufus");
  var dog2 = new Dog("Fido");
  
  console.log(joinDogFraternity(dog1));
  console.log(joinDogFraternity(dog2)); 