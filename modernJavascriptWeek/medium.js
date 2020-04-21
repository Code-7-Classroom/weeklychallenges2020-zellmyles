// MEDIUM: Write a function that takes in an array of numbers and outputs the average of all the numbers. 


const nums = [10, 20, 30];
let total = 0;

const returnAvg = (arr) => {
    for (i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    const avg = (total / arr.length);
    return avg;
   
}

console.log(returnAvg(nums))
