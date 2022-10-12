//S1410922032
//Elevator
var RLS = require("readline-sync");

var CurrentFloor=5;
var TargetFloor;
const TopFloor=6;
const BottomFloor=-10;

do {
    TargetFloor = RLS.question("Elevator Now At"+ CurrentFloor +" Terget?");
//TopFloor >= TargetFloor >= BottomFloor
if ( TargetFloor >= BottomFloor && TargetFloor <= TopFloor ) {
    console.log("Valid");

    if(TargetFloor < CurrentFloor){
        
        //Down
        console.log("Move Down......");
        while (TargetFloor<CurrentFloor) {
            CurrentFloor--;
            console.log("Elevator Now At"+ CurrentFloor);
        }

    }else if(TargetFloor > CurrentFloor){
        
        //Up
        console.log("Move Up......");
        while (TargetFloor>CurrentFloor) {
            CurrentFloor++;
            console.log("Elevator Now At"+ CurrentFloor);
        }

    }else if(TargetFloor == CurrentFloor){
        
        //
        console.log("Huh?");
        break;
    }


} else {
    console.log("Invalid");
    continue;
}


}while(1)