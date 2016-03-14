function Node(key, data){
    this.key = key;
    this.data = data;
    this.next = null;
}

function LinkedList(key, data){
    this.head = new Node(key, data);
    this.tail = this.head;
}
LinkedList.prototype.push = function(key, data){
    if(!this.head){
        this.head = new Node(key,data);
        this.tail = this.head;
        return this;
    }

    this.tail.next = new Node(key, data);
    this.tail = this.tail.next;

    return this;
};

LinkedList.prototype.pop = function(){
    let oldHead = this.head;
    this.head = this.head.next;
    return oldHead;
};
LinkedList.prototype.peekLast = function(){
    return this.tail;
};

LinkedList.prototype.find = function(key){
    if(this.head.key === key){
        return this.head;
    }

    let curr = this.head.next;
    while(curr){
        if(curr.key === key){
            return curr;
        }
    }

    return curr;
};


function HashMap(){
    this.size = 50;
    this.list = new Array(this.size);
}

HashMap.prototype.put = function(key, val){

    if(typeof key !== 'string'){
        throw new Error('Key of string type required');
    }


    let index = this.hashFun(key);
    let v = this.list[index];

    if(!v){
        this.list[index] = val;
        return this;
    }

    if(v instanceof LinkedList){
        v.push(key, val);
        return this;
    }

    let ll = new LinkedList(key, v);
    ll.push(val);
    this.list[index] = ll;
    return this;

};

HashMap.prototype.get = function(key){
    let index = this.hashFun(key);
    let v = this.list[index];

    if(v instanceof LinkedList){
        let node = v.find(key);
        return node.data;
    }

    return v;
};
HashMap.prototype.hashFun = function(key){
    let c = 0;
    for(let i = 0; i < key.length; i++){
        c += key.charCodeAt(i);
    }

    return c % this.size;
};

export default HashMap;