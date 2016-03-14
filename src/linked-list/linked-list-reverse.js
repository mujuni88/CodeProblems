function reverseLL(head){
    if(!head){
        throw new TypeError('TypeError');
    }

    let prev = null, next, curr = head;
    while(curr){
        next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
    }

    return prev;
}

function reverseLLRec(node){
    if(!node || !node.next){
        return node;
    }

    let head = reverseLLRec(node.next);
    node.next.next = node;
    node.next = null;
    
    return head;
}
export {reverseLL, reverseLLRec};
