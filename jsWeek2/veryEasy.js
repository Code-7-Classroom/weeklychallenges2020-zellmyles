
/*VERY EASY: Write a function named min that takes two arguments and returns their minimum.*/


function min(num1, num2) {
    if (num1 > num2) {
        return(num2)
    } else if (num1 < num2) {
        return(num1)
    }
}

var num1 = 100
var num2 = 50
var answer  = min(num1, num2)
console.log(answer)