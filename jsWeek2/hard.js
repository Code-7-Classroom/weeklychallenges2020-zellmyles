/* HARD: Given the information below for Tom and Jerry. 
Tom - 	height:  9in   	mass: 8 lbs
Jerry - 	height: 10cm 	mass: 45 g
Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
    BMI = mass / height ^2 = mass / (height * height)
Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. 
Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. 
Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false). */

var tom = {
    name: 'Tom',
    mass: 8,
    height: 9
}

var jerry = {
    name: 'Jerry',
    mass:45,
    height: 10
}


var tomBMI = tom.mass / (tom.height * tom.height)
console.log(tomBMI)

var jerryBMI = jerry.mass / (jerry.height * jerry.height)
console.log(jerryBMI)



var trueFalse = (tomBMI < jerryBMI)
console.log(trueFalse)

console.log('Jerry\'s BMI of ' + jerryBMI + ' is higher than Tom\'s BMI of ' +tomBMI)





