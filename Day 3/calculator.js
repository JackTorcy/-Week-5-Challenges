// Basic Calculator - 
//an example to how we can link functions to HTML elements and get user input values

// sumUp will take 2 values and add them together
function sumUp(valueOne, valueTwo) {
  //convert strings to numbers and add together  
  return Number(valueOne) + Number(valueTwo); // convert string value to a number value
};
function sub(valueOne, valueTwo) {
  return Number(valueOne) - Number(valueTwo);
}

// define some basic variables we need for the calculate function
//const operator = ?  operation
const numberOne = document.getElementById('numberone') //INPUT 1
const numberTwo = document.getElementById('numbertwo') //INPUT 2
const result = document.getElementById('result') //Output
// let operator = document.getElementById('operator')
let operator = document.querySelectorAll('div>input')
let displayOperator = document.getElementById('displayOperator')
console.log(displayOperator)
console.log(operator)


//Calculate - the fuction that brings it all together
for (let i=0;i<operator.length; i++) {
  operator[i].addEventListener('click', function run(){
    displayOperator.innerText = operator[i]
  })
}


function calculate() {
 if (operator == '+') {
  let sum = sumUp(numberOne.value, numberTwo.value);
    
 } 
 //else if () {

 //}
  //sum calls the sumUP function and valueOne and valueTwo are provided inside brackets
   //
  // numberOne.value = will get the input from the user for that box (2, 67, 890)
  
  //result is converted to a string and applied to the value property of our result input
  result.value = sum.toString();
};