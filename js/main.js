/* JavaScript for WATS 3020 Sandwich Machine Assignment */

// Step One ///////////////////////////////////////////////////////////
//This prompts the user to input what kind of bread they want, with a default value.
let bread = prompt("What kind of bread do you want? (such as wheat, white, sourdough, rye, ect)", "rye");

//This prompts the user to input what kind of meat(s) they want, with formatting instruction, with default values
let meats = prompt("What kind of meat(s) would you like? You may select more than one by separating with commas like this: 'chicken, bacon, beef'.", "bacon");

//This prompts the user to input what kind of topping(s) they want, with formatting instruction, with default values
let toppings = prompt("Enter a comma separated list of toppings.", "sprouts, pickles, lettuce");

//This prompts the user to input what kind of condiment(s) they want, with formatting instruction, with default values
let condiments = prompt("Enter a comma separated list of condiments.", "mayo, mustard");


// Step Two ////////////////////////////////////////////////////////////
// The `prices` object below specifies the prices for each thing.

let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};

//Converts order information from Strings to Arrays.

let meatArray = meats.split(',');
let toppingArray = toppings.split(',');
let condimentArray = condiments.split(',');

//Calculates cost for meat, toppings, and condiments.
//This is done by multiplying the length of the possibly plural categories by their designated prices per item in category

let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray.length * prices.topping
let condimentCost = condimentArray.length * prices.condiment;

//Combines the costs of each part of the sandwich to get the subtotal.
let subtotal = prices.sandwich + meatCost + toppingCost + condimentCost;

//Calculate the tax owed using the waStateTaxRate.
let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;

//Calculates `totalPrice` by adding `subtotal` and `orderTax`.
let totalPrice = subtotal + orderTax;


// Step Three //////////////////////////////////////////////////////////
//Provides formatted values for each value displayed on the receipt.

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${bread}</p>
    <p>Meat: ${meats}</p>
    <p>Toppings: ${toppings}</p>
    <p>Condiments: ${condiments}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${prices.sandwich.toFixed(2)}</p>
    <p class="text-right">Meat: $${meatCost.toFixed(2)}</p>
    <p class="text-right">Toppings: $${toppingCost.toFixed(2)}</p>
    <p class="text-right">Condiments: $${condimentCost.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice.toFixed(2)}</p>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
