//S1410922032
//Elevator
var RLS = require("readline-sync");

var CurrentFloor=5;
var TargetFloor;
const TopFloor=6;
const BottomFloor=1;

do {
    TargetFloor = RLS.question("Elevator Now At"+ CurrentFloor +" Terget?");
//TopFloor >= TargetFloor >= BottomFloor
if ( TargetFloor >= BottomFloor && TargetFloor <= TopFloor ) {
    console.log("Valid");
} else {
    console.log("Invalid");
}


}while(1)