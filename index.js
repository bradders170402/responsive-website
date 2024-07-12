// let name='Brad'; // string literal
// let lastName='Rising';

// const interestRate=0.3; // number literal
// interestRate=0.1; // This will throw an error because interestRate is a constant

// let isApproved=true; // boolean literal
// let firstName=undefined;
// let selectedColor=null; // used when we want to clear a value of a variable

let person = {
    name: 'Brad',
    age: 30
};

// Dot notation
person.name = 'John';

// Bracket notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name); // Output: Mary

// Array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length); // Output: 3

let greet = (name, lastName) => {
    console.log(`Hello ${name} ${lastName}`);
}
greet('Brad', 'Rising'); // Output: Hello Brad Rising

let square = number => {
    return number * number;
}
console.log(square(2)); // Output: 4

// Comparison operators
let age = 30;
console.log(age == '30'); // Output: true
console.log(age === '30'); // Output: false

if (age === 30) {
    console.log('This is the correct age');
} else if (age > 30) {
    console.log('This age is too old');
} else if (age < 30) {
    console.log('This age is too young');
}

// !== is not equal to
// and (&&) / or (||) operators can be used

// Constants for shipping cost
const standardShippingCost = 6;
const discountedShippingCost = 4;

// Function to calculate shipping cost
function calculatingShippingCost(totalPriceParam) {
    let shippingCost;
    if (totalPriceParam <= 10) {
        shippingCost = standardShippingCost;
    } else if (totalPriceParam <= 20) {
        shippingCost = discountedShippingCost;
    } else {
        shippingCost = 0;
    }
    console.log(`Shipping Cost: ${shippingCost}`);
    console.log(`For total price of ${totalPriceParam}`);
    console.log('--------------');
}

// User starts shopping
totalPrice = 10;
calculatingShippingCost(totalPrice);

// More items added to shopping list
totalPrice = 19;
// Ready to order
calculatingShippingCost(totalPrice);

// Add another item
totalPrice = 24;
calculatingShippingCost(totalPrice);

// Place the order
