let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // Output: true

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // Output: false

console.log("Is car == 'Subaru'? I predict False.");
console.log(car == 'Subaru'); // Output: false

console.log("Is car == 'SuBaRu'? I predict False.");
console.log(car == 'SuBaRu'); // Output: false

console.log("Is car == 'subaru' && car == 'honda'? I predict False.");
console.log(car == 'subaru' && car == 'honda'); // Output: false

console.log("Is car == 'subaru' || car == 'honda'? I predict True.");
console.log(car == 'subaru' || car == 'honda'); // Output: true

console.log("Is !(car == 'subaru')? I predict False.");
console.log(!(car == 'subaru')); // Output: false

console.log("Is car.length == 6? I predict True.");
console.log(car.length == 6); // Output: true

console.log("Is car.length == 5? I predict False.");
console.log(car.length == 5); // Output: false

console.log("Is car.toUpperCase() == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU'); // Output: true


// Is car == 'subaru'? I predict True.
// true
// Is car == 'honda'? I predict False.
// false
// Is car == 'Subaru'? I predict False.
// false
// Is car == 'SuBaRu'? I predict False.
// false
// Is car == 'subaru' && car == 'honda'? I predict False.
// false
// Is car == 'subaru' || car == 'honda'? I predict True.
// true
// Is !(car == 'subaru')? I
