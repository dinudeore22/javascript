
let   arrayOfRollNumbers = [67, 56, 78, 90, 60];

console.log(`Type of array: ${typeof arrayOfRollNumbers}`);

 

let lengthOfArray= arrayOfRollNumbers.length;

console.log(`Length of array is : ${lengthOfArray}`);

 

// Accessing array element

const zerothIndexValue = arrayOfRollNumbers[0];

var arrayOfRollNumbers = [67, 56, 78, 90, 60, 90, 40];

console.log(`Type of array: ${typeof arrayOfRollNumbers}`);

 

let lengthOfArray = arrayOfRollNumbers.length;

console.log(`Length of array is : ${lengthOfArray}`);

 

// Accessing array element

const zerothIndexValue = arrayOfRollNumbers[0];

console.log(`Zeroth index value: ${zerothIndexValue}`);

 

// Access the array element 90

const thirdIndexValue = arrayOfRollNumbers[3];

console.log(`Third index value: ${thirdIndexValue}`);

 

// Accessing last element

let arrayLength = arrayOfRollNumbers.length;

const lastElement = arrayOfRollNumbers[arrayLength-1];

console.log(`Last element: ${lastElement}`);

 

// Adding element in the last position

arrayOfRollNumbers.push(80);

arrayOfRollNumbers.push(30);

console.log(arrayOfRollNumbers);

 

// Adding element in the first position

arrayOfRollNumbers.unshift(50);

console.log(arrayOfRollNumbers);

// Removing last element

arrayOfRollNumbers.pop();

console.log(arrayOfRollNumbers);

 

// Removing first element

arrayOfRollNumbers.shift();

console.log(arrayOfRollNumbers);

 

// arrayOfRollNumbers.push(69, 89, 59);

// console.log(arrayOfRollNumbers);

 

 

var arrayOfRollNumbers = [67, 56, 78, 90, 60, 90, 40];

// Update array element

console.log(`Updating the array value`);

arrayOfRollNumbers[0] = 888;

console.log(arrayOfRollNumbers);

 

// Update the last element 40 with value 77

arrayOfRollNumbers[arrayOfRollNumbers.length - 1] = 77

console.log(arrayOfRollNumbers);

 

console.log("Slice()");

var arrayOfRollNumbers = [67, 56, 78, 90, 60, 90, 40];

const slicedArray = arrayOfRollNumbers.slice(3);

console.log(slicedArray);

 

const sliceArr = arrayOfRollNumbers.slice(2, 5);

console.log(sliceArr);

 

console.log("Splice()");

var arrayOfRollNumbers = [67, 56, 78, 90, 60, 90, 40];

const arraySpliced = arrayOfRollNumbers.splice(3);

console.log(arrayOfRollNumbers);

console.log(arraySpliced);

 

var arrayOfRollNumbers = [67, 56, 78, 90, 60, 90, 40, 99, 80];

let arrSpliced = arrayOfRollNumbers.splice(2, 5);

console.log(arrayOfRollNumbers);

console.log(arrSpliced);

 

// splice 