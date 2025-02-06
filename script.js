// Step 1: Declaring Arrays & Step 2: Accessing Arrays
let colors = ["red", "blue", "green", "pink", "purple"];


//Step 6: Array Destructuring
let [firstColor, secondColor] = colors;
console.log(firstColor, " - This is the First color");
console.log(secondColor, " - This is the second color");

console.log(colors, " - This is the color array")
console.log(colors[0], " - This is the first element of the color array");
console.log(colors[2]," - This is the middle element of the colour array");
console.log(colors[4]," - This is the last element of the color array");
// Step 3: Using Array Properties
console.log(colors.length);
// Step 5: Iterating Through Arrays
for (const color of colors) {
    console.log(color);
}

// Step 4: Array Methods
// pop
let fruits = ["Apple", "Banana", "Orange", "Strawberry", "Peach"];
let lastFruit = fruits.pop();
console.log(lastFruit, " - Last fruit");
console.log(fruits, " - this is the fruits array");

// Also Step 5: Iterating Through Arrays (testing here as well)
for (const fruit of fruits) {
    console.log(fruit);
}

//push
let veggies = ["Cucumber", "Onion", "Potato", "Pea"];
veggies.push ("Ginger")
console.log(veggies, " - This is the veggies array")

//filter

let ages = [32, 33, 16, 40, 15, 11, 2, 133, 27];
let adults = ages.filter(age => age >= 18);
console.log(adults)

//Step 6: Array Destructuring
let [first, second, ...rest] = ages;
console.log(first, " - This is the first age");
console.log(second, " - This is the second age");
console.log(rest);