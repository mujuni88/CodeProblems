/**
 * Created by joebm08 on 1/6/16.
 * Binary Search Function
 */


function bsIndex(A, val){
    "use strict";
    
    var currIndex, 
        minIndex = 0,
        maxIndex = A.length - 1,
        currVal;
    
    while(minIndex <= maxIndex){
        currIndex = (minIndex + maxIndex) >> 1;
        currVal = A[currIndex];
        
        if(val < currVal){
            maxIndex = currIndex - 1;
        } else if(val > currVal){
            minIndex = currIndex + 1;
        } else{
            return currIndex;
        }
    }
    
    return -1;
}

function rec(A, val, minIndex, maxIndex){
    "use strict";
    var currIndex = (minIndex + maxIndex) >> 1;
    var currVal = A[currIndex];

    if(currVal === val){
        return currIndex;
    } else if (val < currVal){
        maxIndex = currIndex - 1;
        return rec(A, val, minIndex, maxIndex);
    } else {
        minIndex = currIndex + 1;
        return rec(A, val, minIndex, maxIndex);
    }
}
console.log(bsIndex([2,4,5,7,9,11,15], 5));