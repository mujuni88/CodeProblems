// HashMap Implementation with LinkedList

"use strict";

function Node(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
}

function LinkedList(key, val) {
    this.head = new Node(key, val);
}

LinkedList.prototype = {
    push: push,
    pop: pop,
    retrieve: retrieve
};

function push(key, val) {
    var head = this.head;

    if (!head) {
        head = new Node(key, val);
        return;
    }

    var temp = head;
    while (temp.next) {
        if (temp.key === key) {
            temp.val = val;
            return;
        }

        temp = temp.next;
    }

    temp.next = new Node(key, val);
}

function pop() {
    var head = this.head;
    this.head = head.next;
    head.next = null;

    return head;
}

function retrieve(key) {
    var head = this.head;

    if (head.key === key) {
        return head.val;
    }

    var temp = head.next;
    while (temp) {
        if (temp.key === key) {
            return temp.val;
        }

        temp = temp.next;
    }

    return undefined;
}

function log(ll) {
    console.log(ll.key + ", " + ll.val);
    var list = ll.next;
    while (list) {
        console.log(list.key + ", " + list.val);
        list = list.next;
    }
}

// var ll = new LinkedList("a",'0');
// ll.push("b",'1');
// ll.push("c",'2');
// ll.push("d",'3');
// ll.push("12",'ab');
// ll.push("34",'cd');
// ll.push("56",'ef');

// log(ll.head);

function HashMap() {
    this.size = 2;
    this.arr = new Array(this.size);
}

HashMap.prototype = {
    set: set,
    get: get,
    hash: hash,
    keySum: keySum
};

function set(key, val) {
    var self = this,
        index = self.hash(key),
        ll = self.arr[index];

    if (!ll) {
        self.arr[index] = new LinkedList(key, val);
    } else {
        ll.push(key, val);
    }

    return self;
}

function get(key) {
    var self = this,
        index = self.hash(key),
        ll = self.arr[index];

    if (!ll) {
        return undefined;
    }

    return ll.retrieve(key);
}

function hash(key) {
    var self = this;
    var index = self.keySum(key) % self.size;
    return index;
}

function keySum(key) {
    var counter = 0;
    for (var i = 0; i < key.length; i++) {
        counter += key.charCodeAt(i);
    }

    return counter;
}

var hm = new HashMap();
hm.set('name', 'Joe Buza').set('age', '27').set('height', '5:10').set("b", '1').set("c", '2').set("d", '3').set("12", 'ab').set("34", 'cd').set("56", 'ef').set('name', 'John Miller');

//console.log(JSON.stringify(hm.arr));
console.log(hm.get('name'));

//# sourceMappingURL=hashmap-link-list-compiled.js.map