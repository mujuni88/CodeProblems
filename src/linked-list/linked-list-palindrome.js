import {reverseLL} from './linked-list-reverse';

function isPalindromeLL(head){
    if(!head){
        throw new TypeError('TypeError');
    }

    var stash = [], fast = head, slow = head;

    while(fast && fast.next){
        stash.push(slow.data);
        slow = slow.next;
        fast = fast.next.next;
    }

    if(fast){
        slow = slow.next;
    }

    while(slow){
        if(slow.data !== stash.pop()){
            return false;
        }

        slow = slow.next;
    }

    return true;
}

function isPalindromeLL1(head){
    if(!head){
        throw new TypeError('TypeError');
    }

    var fast = head, slow = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    if(fast){
        slow = slow.next;
    }

    if(!slow){return true};

    // reverse slow
    slow = reverseLL(slow);
    fast = head;

    // compare fast to head until slow reaches end
    while(slow){
        if(fast.data !== slow.data){
            return false;
        }

        slow = slow.next;
        fast = fast.next;
    }

    return true;
}

function isPalindromeRec(node){

}

function isPalRec(node, length){
    if(length === 0 || length === 1){
        return node;
    }

    var middle = isPalRec(node.next, length - 2);
}

function getLength(node){
    if(!node){
        return 0;
    }

    return 1 + getLength(node.next);
}


export {isPalindromeLL, isPalindromeLL1};