//S1410922032
//Elevator
var RLS = require("readline-sync");

var CurrentFloor= "3"; //6
var TargetFloor;
              //---0----1----2----3---4---5---6---7---8---9--10
var FloorName = ["B4","B3","B2","B1","1","2","3","4","5","6","7"];

// FloorName.indexOf(TargetFloor.UpperCase)



//console.log(FloorName.indexOf(CurrentFloor.toUpperCase()));



do {
    TargetFloor = RLS.question("Elevator Now At Floor "+   FloorName[FloorName.indexOf(CurrentFloor.toUpperCase())]   +" Terget?");
    //TargetFloor = RLS.question("Elevator Now At "+ FloorName[CurrentFloor] +" Terget?");


    //console.log(   FloorName.indexOf(TargetFloor.toUpperCase())   );

     if ( FloorName.indexOf(TargetFloor.toUpperCase()) != -1) {
        //console.log(   FloorName.indexOf(CurrentFloor.toUpperCase())   );
        console.log("Valid");
        console.log(FloorName.indexOf(TargetFloor.toUpperCase()) + FloorName[FloorName.indexOf(CurrentFloor.toUpperCase())]);
        console.log(FloorName.indexOf(TargetFloor.toUpperCase()) - FloorName[FloorName.indexOf(CurrentFloor.toUpperCase())]);




     } else {
    
        console.log("Floor" + " < " +TargetFloor + " > " + "Invalid!");

     }




}while(1)



/*



if ( TargetFloor >= FloorName.indexOf[0] && TargetFloor <= FloorName.indexOf(TargetFloor.slice(-1).UpperCase) ) {
    console.log("Valid");

    if(TargetFloor < FloorName[CurrentFloor]){
        
        //Down
        console.log("Move Down......");
        while (TargetFloor<FloorName[CurrentFloor]) {
            CurrentFloor--;
            console.log("Elevator Now At "+ FloorName[CurrentFloor]);
        }

    }else if(TargetFloor > FloorName[CurrentFloor]){
        
        //Up
        console.log("Move Up......");
        while (TargetFloor>FloorName[CurrentFloor]) {
            CurrentFloor++;
            console.log("Elevator Now At "+ FloorName[CurrentFloor]);
        }

    }else if(TargetFloor == FloorName[CurrentFloor]){
        
        //
        console.log("Huh?");
        break;
    }


} else {
   
    continue;
}


}while(1)

*/


// console.log("Invalid \n");
// console.log("Please Input Floor Between " + FloorName.toString());
