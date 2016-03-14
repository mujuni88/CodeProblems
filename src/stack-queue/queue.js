function Queue(){
    this.arr = [];
}

Queue.prototype.enqueue = function(data){
    this.arr.push(data);
    return this;
}

Queue.prototype.dequeue = function(){
    if(!this.size()){
        return null;
    }

    return this.arr.shift();
}
Queue.prototype.size = function(){
    return this.arr.length;
}


function Queue2(){
    this.storage = {};
    this.len = 0;
    this.oldestIndex = 1;
    this.newestIndex = 1;
}
Queue2.prototype.enqueue = function(data){
    this.storage[this.newestIndex] = data;
    ++this.newestIndex;

    return this;
}

Queue2.prototype.dequeue = function(){

    if(this.newestIndex !== this.oldestIndex){
        var data = this.storage[this.oldestIndex];

        delete this.storage[this.oldestIndex];

        ++this.oldestIndex;

        return data;
    }

    return null;
}

Queue2.prototype.size = function(){
    return this.newestIndex - this.oldestIndex;
}

Queue2.prototype.peek = function(){
    return this.storage[this.oldestIndex];
}

function Queue3(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
}
Queue3.prototype.enqueue = function(data){
    this.stack1.push(data);
    return this;
}

Queue3.prototype.dequeue = function(){
    mergeStacks.call(this);

    if(this.stack2.isEmpty()){
        return null;
    }


    return this.stack2.pop();
}

Queue3.prototype.size = function(){
    mergeStacks.call(this);

    return this.stack2.size();
}

Queue3.prototype.peek = function(){
    mergeStacks.call(this);

    return this.stack2.peek();
}

function mergeStacks(){
    var d;
    while(!this.stack1.isEmpty()){
        d = this.stack1.pop();
        this.stack2.push(d);
    }
}

export default Queue;