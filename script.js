// Part 1: Date Display

var today = new Date();
var month = today.getMonth() + 1; // getMonth() is 0-based so we add 1
var day = today.getDate();
var year = today.getFullYear();

if (month < 10) {
  month = "0" + month;
}
if (day < 10) {
  day = "0" + day;
}

var dateString = "Today is " + month + "/" + day + "/" + year;
document.getElementById("dateOutput").textContent = dateString;


// Part 2: Number Conversion

var value1 = "42";
var value2 = "19.75";
var value3 = "hello";
var value4 = "100";

var converted1 = Number(value1);
var converted2 = Number(value2);
var converted3 = Number(value3);
var converted4 = Number(value4);

var isNaN1 = Number.isNaN(converted1);
var isNaN2 = Number.isNaN(converted2);
var isNaN3 = Number.isNaN(converted3);
var isNaN4 = Number.isNaN(converted4);

var isInt1 = Number.isInteger(converted1);
var isInt2 = Number.isInteger(converted2);
var isInt3 = Number.isInteger(converted3);
var isInt4 = Number.isInteger(converted4);

var result1 = "Original: '" + value1 + "' \u2192 Converted: " + converted1 + " \u2192 isNaN: " + isNaN1 + " \u2192 isInteger: " + isInt1;
var result2 = "Original: '" + value2 + "' \u2192 Converted: " + converted2 + " \u2192 isNaN: " + isNaN2 + " \u2192 isInteger: " + isInt2;
var result3 = "Original: '" + value3 + "' \u2192 Converted: " + converted3 + " \u2192 isNaN: " + isNaN3 + " \u2192 isInteger: " + isInt3;
var result4 = "Original: '" + value4 + "' \u2192 Converted: " + converted4 + " \u2192 isNaN: " + isNaN4 + " \u2192 isInteger: " + isInt4;

// check if "hello" came back as NaN
var nanMessage = "";
if (Number.isNaN(converted3)) {
  nanMessage = "'" + value3 + "' is not a valid number.";
} else {
  nanMessage = "'" + value3 + "' is a valid number.";
}

// check if "42" is a whole number
var intMessage = "";
if (Number.isInteger(converted1)) {
  intMessage = "'" + value1 + "' is an integer.";
} else {
  intMessage = "'" + value1 + "' is not an integer.";
}

var allResults = result1 + "<br>" + result2 + "<br>" + result3 + "<br>" + result4;
allResults = allResults + "<br><br>" + nanMessage + "<br>" + intMessage;

document.getElementById("numberConversionOutput").innerHTML = allResults;


// Part 3: Math and Formatting

var itemPrice = 29.99;
var taxRate = 0.08;
var shippingCost = 5.50;

var subtotal = itemPrice + shippingCost;
var taxAmount = itemPrice * taxRate;
var totalCost = subtotal + taxAmount;

var formattedTax = taxAmount.toFixed(2);
var formattedTotal = totalCost.toFixed(2);

var mathResult = "Item Price: $" + itemPrice;
mathResult = mathResult + "<br>Shipping Cost: $" + shippingCost;
mathResult = mathResult + "<br>Subtotal: $" + subtotal.toFixed(2);
mathResult = mathResult + "<br>Tax Amount: $" + formattedTax;
mathResult = mathResult + "<br><strong>Total Cost: $" + formattedTotal + "</strong>";

document.getElementById("mathOutput").innerHTML = mathResult;