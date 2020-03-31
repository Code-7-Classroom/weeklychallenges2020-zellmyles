/* MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. 
For example: if the user enters the number 3, then it should return the month “March.” 
Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12). */


var numberOfMonth = parseInt(prompt('Enter a number between 1-12.'))

function month(numberOfMonth) {
    if (numberOfMonth === 1) {
        return('1 January') 
    } else if (numberOfMonth === 2) {
        return('2 February') 
    } else if (numberOfMonth === 3) {
        return('3 March') 
    } else if (numberOfMonth === 4) {
        return('4 April') 
    } else if (numberOfMonth === 5) {
        return('5 May') 
    } else if (numberOfMonth === 6) {
        return('6 June') 
    } else if (numberOfMonth === 7) {
        return('7 July') 
    } else if (numberOfMonth === 8) {
        return('8 August') 
    } else if (numberOfMonth === 9) {
        return('9 September') 
    } else if (numberOfMonth === 10) {
        return('10 October') 
    } else if (numberOfMonth === 11) {
        return('11 November') 
    } else if (numberOfMonth === 12) {
        return('12 December') 
    } else {
        return('Invalid number')
    }
}

var monthNumber = month(numberOfMonth)
console.log(monthNumber)






/*
var numberOfMonth = parseInt(prompt('Enter a number between 1-12.'))

function month(monthNumber) {
    if (monthNumber === 1) {
        return('January') 
    } else if (monthNumber === 2) {
        return('February') 
    } else if (monthNumber === 3) {
        return('March') 
    } else if (monthNumber === 4) {
        return('April') 
    } else if (monthNumber === 5) {
        return('May') 
    } else if (monthNumber === 6) {
        return('June') 
    } else if (monthNumber === 7) {
        return('July') 
    } else if (monthNumber === 8) {
        return('August') 
    } else if (monthNumber === 9) {
        return('September') 
    } else if (monthNumber === 10) {
        return('October') 
    } else if (monthNumber === 11) {
        return('November') 
    } else if (monthNumber === 12) {
        return('December') 
    } else {
        return('Invalid number')
    }
}

var monthNumber = month(numberOfMonth)
console.log(monthNumber)
*/







  



