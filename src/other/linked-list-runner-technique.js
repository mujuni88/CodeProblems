/*
  Create a linked list with the following nodes
  a1 -> a2 -> a3 -> a4 -> b1 -> b2 -> b3 -> b4
  
  Then print the values in weaving pattern as follows
  a1 -> b1 -> a2 -> b2 -> a3 -> b3 -> a4 -> b4
 */


/*
  Linked List implementation
 */ 
function Node(data){
  this.data = data;
  this.next = null;
}

function LinkedList(){
  this.head = null;
}
LinkedList.prototype.addToHead = function(data){
  if(!this.head){
    this.head = new Node(data);
    return this;
  }
  
  var head = this.head;
  var newData = new Node(data);
  newData.next = head;
  
  head = newData;
  
  return this;
};

LinkedList.prototype.addToTail = function(data){
  if(!this.head){
    this.head = new Node(data);
    return this;
  }
  
  var head = this.head;
  while(head.next){
    head = head.next;
  }
  
  head.next = new Node(data);
  
  return this;
};
LinkedList.prototype.remove = function(data){
  if(this.head.data === data){
    this.head = this.head.next;
    return this;
  }
  
  var head = this.head, temp;
  
  while(head.next){
    if(head.next.data === data){
      temp = head.next.next;
      head.next = temp;
      return this;
    }
  }
  
  return this;
};

/*
  Log functions. Recursive and Non Recursive
 */
function logNonRec(ll){
  var l = ll;
  while(l){
    console.log(l.data);
    l = l.next;
  }
}

function logRec(ll){
  if(ll){
    console.log(ll.data);
  }
  
  if(ll.next){
    logRec(ll.next);
  } 
}


/*
Weaving function
 */
function weave(head){
  var fast, slow;
  if(head.next){
    slow = head;
    fast = head.next;
  }
  
  while(fast.next){
    fast = fast.next.next;
    slow = slow.next;
  }
  
  fast = head;
  slow = slow.next;
  
  var tempFNext, tempSNext;
  while(slow.next){
    tempFNext = fast.next;
    tempSNext = slow.next;
    
    slow.next = tempFNext; 
    fast.next = slow;
    
    fast = tempFNext;
    slow = tempSNext;
  }
  
  fast.next = slow;
  
  return head;
}

function reverse(head){
  //b5-b4--a3-a2-a1
  var next, tail, h, fast;

  if(!head.next){
    return head;
  }

  h = head;
  fast = head.next;
  tail = h;

  while(tail.next){
    next = fast.next;

    tail.next = next;
    fast.next = h;
    h = fast;
    fast = next;
  }

  return h;
}

function reverseRec(head){
  if(head.next){
    head.next = reverseRec(head.next);
  }

  return head;
}
/*
Populate data
 */

//a1,a2,a3,a4,b1,b2,b3,b4
var ll = new LinkedList();
ll.addToTail('a1')
  .addToTail('a2')
  .addToTail('a3')
  .addToTail('a4')
  .addToTail('a5')
  .addToTail('b1')
  .addToTail('b2')
  .addToTail('b3')
  .addToTail('b4')
  .addToTail('b5');

var h = ll.head;
// var w = weave(h);
logRec(reverseRec(h));   