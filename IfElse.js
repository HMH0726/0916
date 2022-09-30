//S1410922032

const readline = require("readline-sync");
var HR = 0
var WR = 0

var height = readline.question("Ur height?");
while (isNaN(height) || height < 10 || height > 220) {
    console.log("Please Enter Your Height Between 10 And 200"); 
    var height = readline.question("Ur height?");
         
}

var weight = readline.question("Ur weight?");
while (isNaN(weight) || weight < 10 || weight > 200) {
         console.log("Please Enter Your Weight Between 10 And 200");
         var weight = readline.question("Ur weight?");
}
 


var hPower2 = Math.pow(height / 100, 2);
var bmi = weight / hPower2;
//console.log("Your height: "+ height+ '\n ,weight:'+weight);
console.log("Your bmi= " + bmi);