// X --> Row
// Y --> Col

var  MAZE= [
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,1,1,1,1,1,1,1,1],
    [1,1,1,0,1,1,0,0,0,0,1,1],
    [1,1,1,0,1,1,0,1,1,0,1,1],
    [1,1,0,0,0,0,0,1,1,0,1,1],
    [1,1,1,0,1,1,0,1,1,0,1,1],
    [1,1,1,0,1,1,0,1,1,0,1,1],
    [1,1,1,1,1,1,0,1,1,0,1,1],
    [1,1,0,0,0,0,0,0,1,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]
]; 

var exitRow=8, exitCol=10; //終點
var stack=[];

class Point{
    constructor(_Row,_Col){
        this.Row = _Row;
        this.Col = _Col;
    }
}

var Row=1, Col=1; //start point

while(Row!=exitRow || Col!=exitCol){
    MAZE[Row][Col]=2;
    //Up
    if(MAZE[Row-1][Col]==0){
         stack.push(new Point(Row,Col));
         Row=Row-1;
    }
    //Left
    else if(MAZE[Row][Col-1]==0){
        stack.push(new Point(Row,Col));
         Col=Col-1;
    }
    //Down
    else if(MAZE[Row+1][Col]==0){
        stack.push(new Point(Row,Col));
         Row=Row+1;
    }
    //Right
    else if(MAZE[Row][Col+1]==0){
        stack.push(new Point(Row,Col));
         Col=Col+1;
    }
    //back to previous step
    else{
        if(stack.length>0){
            var prev = stack.pop();
            Row = prev.Row;
            Col = prev.Col;
        }
        else
            break;
    }
}
if(stack.length>0){
    stack.push(new Point(Row,Col));
    console.log(JSON.stringify(stack));
}else{
    console.log("No solution!")
}