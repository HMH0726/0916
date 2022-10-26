var capacity = 10;
var stack=[];

function push(data){
    if(stack.length < capacity) {
        stack.push(data);
    }
}

function pop() {
    if (stack.length > 0) {
        return stack.pop();
    }else{
        return "empty";
    }
}





push("A");
push("B");
push("C");
pop();
push("D");
push("E");