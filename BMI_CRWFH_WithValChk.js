//S1410922032
//Calculate Recommended Weight From Height.
//Recommended BMI 18.5 ≤ BMI < 24
const RLS = require("readline-sync");

var height = RLS.question("Enter Your Height");
console.log("===================================");
console.log("Your Height = "+height);

var RecommendedWeight_A = (height/100)**2*18.5
var RecommendedWeight_B = (height/100)**2*24

console.log("===================================");
console.log("Recommended Weight = "+RecommendedWeight_A.toFixed(1)+ " ~ " + RecommendedWeight_B.toFixed(1));
console.log("===================================");

//.toFixed(8763)
// BMI = 體重(公斤) / 身高2(公尺2)


while (true) {
    var height = readline.question("Ur height?");
    if (isNaN(height) || height < 10 || height > 220) {
        console.log("Please Enter Your Height Between 10 And 200");
        break;
    }
}