// VERY HARD: Write a function that takes in a string and outputs the *first* occurrence of a character that does not repeat itself in that string. 
// Output the first character in a string that is unique.

// function with a string paramater
// return the first character that isn't repeated in that string




const uniqueChar = (str) => {
    //declare variable to hold the repeated characters
    const repeatedChar = [];
    //bring in a string
    //loop through string to see which characters repeat
    for (var i = 0; i < str.length; i++){
        if (str.indexOf(i) !== str.lastIndexOf(i)) {
            //if char repeats add it to repeatedChar array
            repeatedChar.push(i);
            return repeatedchar[0];
        }
    }
    //return first item of repeatedChar array
    

}

console.log(uniqueChar('zell'));


///**** Tried pseudo coiding this one out to help get the answer but I mmust have messed up somewheere along the way */