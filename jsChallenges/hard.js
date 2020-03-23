var num1 = parseInt(prompt('Enter a number'))
var num2 = parseInt(prompt('Enter another number'))
var option = prompt('Pick one(+,-,*,/)')



function add(num1, num2){
    var total = num1 + num2
    console.log(total)
}


function subtract(num1, num2){
    var total = num1 - num2
    console.log(total)
}


function multiply(num1, num2){
    var total = num1 * num2
    console.log(total)
}


function divide(num1, num2){
    var total = num1 / num2
    console.log(total)
}




add(num1, num2)
subtract(num1, num2)
multiply(num1, num2)
divide(num1, num2)