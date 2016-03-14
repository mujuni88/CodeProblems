function Node(data){
        this.data = data;
    this.next = null;
}

function LinkedList(){
        this.head = null;
}
LinkedList.prototype.push = function(data){
        if(!this.head){
        this.head = new Node(data);
        return this;
    }

    var curr = this.head;
    while(curr.next){
        curr = curr.next;
    }

    curr.next = new Node(data);

    return this;
}
LinkedList.prototype.remove = function(data){
        if(this.head.data === data){
        this.head = this.head.next;
        return this;
    }

    var curr = this.head;
    while(curr.next){
        if(curr.next.data === data){
            curr.next = curr.next.next;
            return this;
        }

        curr = curr.next;
    }

    return this;
}

function LinkedList2(){
    this.length = 0;
    this.head = null;
}
LinkedList2.prototype.add = function(data){


    // empty
    if(!this.head){
        this.head = new Node(data);

        // update length
        ++this.length;

        return this;
    }

    // not empty
    var curr = this.head;
    while(curr.next){
        curr = curr.next;
    }
    curr.next = new Node(data);

    // update length
    ++this.length;

    return this;
}

LinkedList2.prototype.removeAt = function(position){
    // empty or position out of bounds
    if(!this.length || position < 1 || position > this.length){
        return null;
    }

    // position head
    var count = 1, curr = this.head, deletedNode;
    if(position === 1){
        deletedNode = this.head;
        this.head = this.head.next;

        // update length
        --this.length;

        return deletedNode;
    }

    // not empty
    var beforeDeleted;
    while(count < position){
        beforeDeleted = curr;
        curr = curr.next;
        ++count;
    }

    beforeDeleted.next = curr.next;
    deletedNode = curr;
    curr = null;

    // update length
    --this.length;

    return deletedNode;
}

LinkedList2.prototype.searchNodeAt = function(position){
    // empty or position exceeds length
    if(!this.length || position < 1 || position > this.length){
        return null;
    }

    var curr = this.head, count = 1;

    while(count < position){
        curr = curr.next;
        ++count;
    }

    return curr;
}
LinkedList2.prototype.size = function(){
    return this.length;
}

LinkedList2.prototype.remove = function(){
    return this.removeAt(1);
}

LinkedList2.prototype.peek = function(){
    return this.head.data;
}

export {LinkedList, LinkedList2};