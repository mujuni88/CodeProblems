import {Stack2 as Stack} from './stack';

function StackMinimum(){
    this.min = new Stack();
    this.stack = new Stack();
}
StackMinimum.prototype.push = function(data){
    if(isNaN(data)){
        throw new Error('Not a number');
    }
    
    if(this.min.isEmpty()){
        this.min.push(data);
    } else{
        if(data < this.min.peek()){
            this.min.push(data);
        }
    }
    
    this.stack.push(data);
    
    return this;
}
StackMinimum.prototype.minimum = function(){
    if(this.min.isEmpty()){
        return Infinity;
    }
    
    return this.min.peek();
}
StackMinimum.prototype.pop = function(){
    if(this.stack.isEmpty()){
        return null;
    }
    if(this.stack.peek() === this.min.peek()){
        this.min.pop();
    }
    return this.stack.pop();
}
StackMinimum.prototype.size = function(){
    return this.stack.size();
}

export default StackMinimum;