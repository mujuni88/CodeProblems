import {Stack2 as Stack} from './stack';

function SetOfStacks(limit){
    this.limit = limit;
    this.storage = [];
}

SetOfStacks.prototype.push = function(data){
    // empty
    if(!this.storage.length){
        makeStackLimit.call(this, data);
        return this;
    }

    var stack = this.storage[this.storage.length - 1];
    if(stack.isFull()){
        makeStackLimit.call(this, data);
        return this;
    }

    stack.push(data);

    return this;
}
SetOfStacks.prototype.pop = function(){
    // empty storage
    if(!this.storage.length){
        return null;
    }

    // not empty storage
    var stack = this.storage[this.storage.length - 1];
    // loop through storage to get a non empty stack
    while(stack.isEmpty()){
        // remove stack
        this.storage.pop();
        if(!this.storage.length){
            return null;
        }
        stack = this.storage[this.storage.length - 1];
    }

    return stack.pop();
}
SetOfStacks.prototype.popAt = function(pos){
    if(!this.storage.length || pos < 0 || pos > this.storage.length - 1){
        return null;
    }

    var stack = this.storage[pos];
    while(stack.isEmpty()){
        // remove stack
        this.storage.pop();
        if(!this.storage.length){
            return null;
        }
        stack = this.storage[this.storage.length - 1];
    }

    return stack.pop();

}

SetOfStacks.prototype.size = function(){
    return this.storage.length;
}

function makeStackLimit(data){
    // store new data to 
    var newStack = new StackLimit(this.limit);
    newStack.push(data);
    this.storage.push(newStack);
}


function StackLimit(limit){
    Stack.call(this);
    this.limit = limit;
}
StackLimit.prototype = Object.create(Stack.prototype);
StackLimit.prototype.constructor = StackLimit;

StackLimit.prototype.push = function(data){
    if(this.isFull()){
        return null;
    }

    ++this.len;
    this.storage[this.len] = data;

    return this;
}
StackLimit.prototype.isFull = function(){
    return !this.len < this.limit;
}

export default SetOfStacks;