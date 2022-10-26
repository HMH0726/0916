class Stack{
    constructor(_capacity){
        this.capacity = _capacity;
        this.Stack = [];
    }
    push = function(data){

        if(this.Stack.length < capacity) {
            this.Stack.push(data);
        }else{
            return "OverFlow";
        }

    }

    pop = function () {
        if (this.Stack.length > 0) {
            return this.Stack.pop();
        }else{
            return "empty";
        }
    }
    






}



var myStack = new Stack(10);
myStack.push("A");
myStack.push("B");
myStack.push("C");
myStack.pop();
myStack.push("D");
myStack.push("E");