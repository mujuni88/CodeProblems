function Node(data){
	this.data = data;
	this.next = null;
}

function Stack(){
	this.top = null;
}

Stack.prototype = {
	push:push,
	pop:pop,
	peek:peek
};

Queue.prototype = {
	enqueue:enqueue,
	dequeue:dequeue,
	peek:peek
};

function push(data){
	if(!this.top){
		this.top = new Node(data);
		return this;
	}

	var temp = this.top;
	var newData = new Node(data);
	newData.next = temp;

	this.top = newData;

	return this;
};

function pop(){
	if(this.top){
		var data = this.top.data;
		this.top = this.top.next;
		return data;
	}

	return null;
}

function Queue(){
	this.top = null;
	this.tail = null;
}

function enqueue(data){
	if(!this.top){
		this.top = new Node(data);
		this.tail = this.top;

		this.top.next = this.tail;

		return this;
	}

	var newData = new Node(data);
	this.tail.next = newData;
	this.tail = this.tail.next;

	return this;
}

function dequeue(){
	if(this.top){
		var out = this.top.data;
		this.top = this.top.next;
		return out;
	}

	return null;
}

function peek(){
	return this.top.data;
}



function logRec(list){
  if(list){
    console.log(list.data);
  }
  
  if(list.next){
    logRec(list.next);
  } 
}

/****** STACK *****/
var st = new Stack();
/*st.push('a1')
  .push('a2')
  .push('a3')
  .push('a4')
  .push('a5')
  .push('b1')
  .push('b2')
  .push('b3')
  .push('b4')
  .push('b5');

logRec(st.top);

console.log('Poped items',st.pop());
console.log(st.pop());
console.log(st.pop(),'END');

console.log("AFTER 3 POPS");

logRec(st.top);*/
var qe = new Queue();
qe.enqueue('a1')
  .enqueue('a2')
  .enqueue('a3')
  .enqueue('a4')
  .enqueue('a5')
  .enqueue('b1')
  .enqueue('b2')
  .enqueue('b3')
  .enqueue('b4')
  .enqueue('b5');

logRec(qe.top);

console.log('Dequeue items\n',qe.dequeue());
console.log(qe.dequeue());
console.log(qe.dequeue(),'\nEND');

console.log("AFTER 3 DEQUEUES");

logRec(qe.top);