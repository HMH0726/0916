const RLS = require("readline-sync");

var height = RLS.question("Enter Your Height");
var weight = RLS.question("Enter Your Weight");

console.log("Your Height = "+height);
console.log("Your Weight = "+weight);

var BMI = weight/(height/100)**2
// BMI = 體重(公斤) / 身高2(公尺2)

console.log("Your BMI = "+BMI);

