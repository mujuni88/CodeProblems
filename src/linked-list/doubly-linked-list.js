function Node(data){
    "use strict";
    this.data = data;
    this.next = null;
    this.prev = null;
}
function DoublyLinkedList(){
    this.length = 0;
    this.head = null;
    this.tail = null;
}
DoublyLinkedList.prototype.add = function(data){
    if(this.length){
        // not empty
        var newNode = new Node(data);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    } else{
        // empty
        this.head = new Node(data);
        this.tail = this.head;
    }

    // update length
    ++this.length;

    return this;
}

DoublyLinkedList.prototype.removeAt = function(position){
    // empty or position out of bounds
    if(!this.length || position < 1 || position > this.length){
        return null;
    }

    // position head
    var count = 1, curr = this.head, deletedNode;
    if(position === 1){
        deletedNode = this.head;
        this.head = this.head.next;

        if(!this.head){
            this.tail = null;
        } else{
            this.head.prev = null;
        }

    }else if(position === this.length){
        deletedNode = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;

    } else{
        // not empty
        while(count < position){
            curr = curr.next;
            ++count;
        }

        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
        deletedNode = curr;
        curr = null;
    }

    // update length
    --this.length;

    return deletedNode;
}

DoublyLinkedList.prototype.searchNodeAt = function(position){
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

export default DoublyLinkedList;