/**
 * Created by joebm08 on 12/22/15.
 * 
 * Write a function:

 function solution(A);

 that, given a non-empty zero-indexed array A of N integers, returns the minimal positive integer (greater than 0) that does not occur in A.

 For example, given:

 A[0] = 1
 A[1] = 3
 A[2] = 6
 A[3] = 4
 A[4] = 1
 A[5] = 2
 the function should return 5.

 Assume that:

 N is an integer within the range [1..100,000];
 each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
 Complexity:

 expected worst-case time complexity is O(N);
 expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
 Elements of input arrays can be modified.
 */
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    var min = getMin(A);
    var uniqItems = getUniqItems(A);

    if(min < 0 || min > 0){
        min = 0;
    }
    
    for(var i = 0; i < A.length; i++){
        if(!uniqItems[++min]){
            return min;
        }
    }

    return ++min;
}

function getMin(A){
    var min = Infinity;

    A.forEach(function(item){
        if(item < min){
            min = item;
        }
    });

    return min;
}

function getUniqItems(A){
    var uniqItems = {};

    A.forEach(function(item){
        if(!uniqItems[item]){
            uniqItems[item] = item;
        }
    });

    return uniqItems;
}

var A =  [-1, 0, 1, 2,3];
console.log(solution(A));