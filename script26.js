//Use an IIFE to Create a Module
let funModule = (function () {
    return {
      isCuteMixin: function(obj) {
        obj.isCute = function() {
          return true;
        };
      },
      singMixin: function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        };
      }
    };
  })();
  // create an object
  let animal = {};
  
  // add the mixins to the object
  funModule.isCuteMixin(animal);
  funModule.singMixin(animal);
  
  // test the properties and methods of the object
  console.log(animal.isCute()); // expected output: true
  animal.sing(); // expected output: "Singing to an awesome tune"
  