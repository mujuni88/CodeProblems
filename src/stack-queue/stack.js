function Stack(){
    this.arr = [];
}

Stack.prototype.push = function(data){
    this.arr.push(data);
    return this;
}

Stack.prototype.pop = function(){
    if(!this.size()){
        return null;
    }

    return this.arr.pop();
}
Stack.prototype.size = function(){
    return this.arr.length;
}

function Stack2(){
    this.storage = {};
    this.len = 0;
}
Stack2.prototype.push = function(data){
    ++this.len;
    this.storage[this.len] = data;

    return this;
}

Stack2.prototype.pop = function(){
    if(this.len){
        var data = this.storage[this.len];
        delete this.storage[this.len];

        --this.len;
        return data;
    }

    return null;
}
Stack2.prototype.size = function(){
    return this.len;
}

Stack2.prototype.peek = function(){
    return this.storage[this.len];
}

Stack2.prototype.isEmpty = function(){
    return (!this.len);
}

export {Stack, Stack2};