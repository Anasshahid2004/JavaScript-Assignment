const objectName = {
    key1: value1,
    key2: value2,
    key3: value3,
    ...
};

const person = {
    name: "John Smith",
    age: 35,
    job: "Software Developer",
    interests: ["programming", "music", "hiking"]
  };

  console.log(person.name);  // Output: "John Smith"
console.log(person.age);   // Output: 35
console.log(person["job"]); // Output: "Software Developer"

// Add a new property to the object.
person.location = "New York";

// Modify the value of an existing property.
person.age = 36;

// Delete a property from the object.
delete person.interests;

const car = {
    make: "Ford",
    model: "Mustang",
    year: 2020,
    color: "red",
    features: ["air conditioning", "heated seats", "navigation system"],
    owner: {
      name: "Alice",
      age: 25,
      job: "teacher"
    }
  };

console.log(car.make);       // Output: "Ford"
console.log(car.year);       // Output: 2020
console.log(car["model"]);   // Output: "Mustang"
console.log(car.owner.name); // Output: "Alice"
console.log(car.owner.age);  // Output: 25

  