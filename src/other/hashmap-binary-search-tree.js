/**
 * Created by joebm08 on 1/9/16.
 */

function Node(key, val){
    "use strict";
    this.key = key;
    this.val = val;
    this.right = null;
    this.left = null;
}

function BinarySearchTree(){
    "use strict";
    this.root = null
}

BinarySearchTree.prototype = {
    add:add, 
    addRec:addRec,
    find:find
};

function add(key, val){
    "use strict";
    
    var stack = [];
    if(!this.root){
        this.root = new Node(key, val);
        return this;
    } 
    
    var root;
    stack.push(this.root);
    while(stack.length){
        root = stack.pop();

        if(val <= root.val){
            if(root.left){
                stack.push(root.left);
            } else{
                root.left = new Node(key, val);
            }
        } else{
            if(root.right){
                stack.push(root.right);
            } else{
                root.right = new Node(key, val);
            }
        }
    }
    
    return this;
}

function addRec(key, val){
    "use strict";
    this.root = addRecursion(this.root, key, val);
    return this;
}
function addRecursion(node, key, val){
    if(!node){
        return new Node(key, val);
    }

    if(val <= node.val){
        node.left = addRecursion(node.left, key, val);
    } else{
        node.right = addRecursion(node.right, key, val);
    }

    return node;
}

function find(key){
    "use strict";
    
    var root = this.root;
    
    if(key === root.key){
        return root.val;
    }
    
    if(val <= root.val){
        root = root.left;
        while(root){
            if(key === root.key){
                return root.val;
            }
            root = root.left;
        }
        
    } else{
        root = root.right;
        
        while(root){
            if(key === root.key){
                return root.val;
            }
            root = root.right; 
        }
    }
    
    return undefined;

}

function log(root){
    if(root.left){
        root.left = log(root.left);
    }

    console.log(root.key + ', ' + root.val);
    
    if(root.right){
        root.right = log(root.right);
    }
}

function log2(root){
    "use strict";
    var stack = [], temp;
    
    if(root){
        stack.push(root);
    }
    
    while(stack.length){
        root = stack.pop();
        if(root.left){
            stack.push(root);
            stack.push(root.left);
            continue;
        } else{
            temp = stack.pop();
            temp.left = null;
            stack.push(temp); 
        }
        console.log(root.val);
        
        if(root.right){
            stack.push(root);
            stack.push(root.right);
            continue;
        } else{
            temp = stack.pop();
            temp.right = null;
            stack.push(temp);
        }
        
    }
}


var bst = new BinarySearchTree();
bst.add('a',5)
    .add('b',2)
    .add('c',1)
    .add("d",3)
    .add("e",7)
    .add("f",6)
    .add('g',9);

log(bst.root);
//console.log(bst.find('f'));
