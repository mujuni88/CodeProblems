/**
 * Created by joebm08 on 1/6/16.
 * 
 * Javascript implementation of Binary Search Tree
 */

function BstNode(data){
    this.data = data;
    this.left = null;
    this.right = null;
}

function insert(root, data){
    if(!root){
        root = getNewNode(data);
        root.left = null;
        root.right = null;
    } else if(data <= root.data){
        root.left = insert(root.left, data);
    } else{
        root.right = insert(root.right, data);
    }

    return root;
}
function getNewNode(data){
    return new BstNode(data);
}

function search(root, data){
    if(!root){
        return false;
    } else if(root.data === data){
        return true;
    } else if(data < root.data){
        return search(root.left, data);
    } else{
        return search(root.right, data);
    }
}

function logInorder(root){
    if(root.left){
        logInorder(root.left);
    }
    if(root){
        console.log(root.data);
    }
    
    if(root.right){
        logInorder(root.right);
    }
    
}

var root = null;
root = insert(root, 5);
 root = insert(root, 7);
 root = insert(root, 6);
 root = insert(root, 9);
 root = insert(root, 4); 
 root = insert(root, 4); 
 root = insert(root, 5); 

logInorder(root);
