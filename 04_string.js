


var greet = "Good Morning";
var greetLength = greet.length;
console.log(" Total Number of character  given string is:" , greetLength);

var firstName = "Dinesh"
var firstNameLength = firstName.length;
console.log(" Total no of character is;", firstNameLength);var greet = "Good Morning";

var includeResult = greet.includes("ing");

console.log("Is ing string available inside : ", includeResult);

 

var searchResult = greet.search("Mor");

console.log("Search result : ", searchResult);

 

var sliceResult = greet.slice(4, 6);

var greet = "Good Morning mate, How are you";

var resultSplit = greet.split(" ");

console.log(resultSplit);

console.log("Total number of words: ",resultSplit.length);

 

var resultSplit = greet.split(",");

console.log(resultSplit);

console.log("Total number parts: ",resultSplit.length);

 

var resultSplit = greet.split("");

console.log(resultSplit);

console.log("Total number of words: ",resultSplit.length);


var greet = "Good Morning mate, How are you";

var resultSplit = greet.split(" ");

console.log(resultSplit);

//console.log("After slipt words are:",resultSplit, "Total number of words: ",resultSplit.length);

console.log(`After slipt words are ${resultSplit} Total number of words ${resultSplit.length} `);

 

console.log(`Given string is: ${greet}`);

console.log("Slice Result is: ", sliceResult);

 

var subStringResult = greet.substring(4, 6);

console.log("Substring result is: ", subStringResult);


