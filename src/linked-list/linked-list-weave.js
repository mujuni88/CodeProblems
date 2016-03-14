import {LinkedList2 as LinkedList} from '../linked-list/linked-list';

function weave(ll){
    if(ll instanceof LinkedList === false){
        throw new Error('Invalid');
    }

    let nextF, nextS, slow = ll.head, fast = ll.head, prev;

    while(fast && fast.next){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }


    if(fast){
        prev = slow;
        slow = slow.next;
    }

    prev.next = null;

    fast = ll.head;

    while(slow){
        nextF = fast.next;
        nextS = slow.next;

        slow.next = nextF;
        fast.next = slow;


        slow = nextS;
        fast = nextF;
    }

    return ll.head;
}

function log(head){
    if(!head){
        return;
    }

    console.log(head.data);
    log(head.next);
}

export default weave;