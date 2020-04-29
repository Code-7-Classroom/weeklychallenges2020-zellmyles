const fs = require ('fs')

let text = fs.readFileSync('/Users/ZellMyles/Desktop/weeklychallenges2020-zellmyles/nodeWeek1Challenges/planets.txt');
let result = text.toString()

console.log(result)
