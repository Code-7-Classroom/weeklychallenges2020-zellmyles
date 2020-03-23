var num1 = parseInt(prompt('Enter a number'))
var option = prompt('Pick one(+,-,*,/)')
var num2 = parseInt(prompt('Enter another number'))

function add(num1, num2) {
 var total =  num1 + num2
 console.log(total)
} 

function subtract(num1, num2) {
   var total = num1 - num2
   console.log(total)
}

function multiply(num1, num2) {
  var total =  num1 * num2
  console.log(total)
}

function divide(num1, num2) {
   var total = num1 / num2
   console.log(total)
}

if (option == '+') { 
    add(num1, num2)
} 

if (option == '-') {
    subtract(num1, num2)
}

if (option == '*') {
    multiply(num1, num2)
}

if (option == '/') {
   divide(num1, num2)
}



