// MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.



var nums = [5, 6, 3, 1, 4]   // Target = 6

function findIndex(x) {
    if (x.indexOf(6) != -1) {
        return (x.indexOf(6))
    } else {
        return (-1)
        }
}

console.log(findIndex(nums))



