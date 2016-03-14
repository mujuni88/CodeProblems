/**
 A non-empty zero-indexed array A consisting of N integers is given. Array A represents numbers on a tape.

 Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

 The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

 In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

 For example, consider array A such that:

 A[0] = 3
 A[1] = 1
 A[2] = 2
 A[3] = 4
 A[4] = 3
 We can split this tape in four places:

 P = 1, difference = |3 − 10| = 7
 P = 2, difference = |4 − 9| = 5
 P = 3, difference = |6 − 7| = 1
 P = 4, difference = |10 − 3| = 7
 Write a function:

 function solution(A);

 that, given a non-empty zero-indexed array A of N integers, returns the minimal difference that can be achieved.

 For example, given:

 A[0] = 3
 A[1] = 1
 A[2] = 2
 A[3] = 4
 A[4] = 3
 the function should return 1, as explained above.

 Assume that:

 N is an integer within the range [2..100,000];
 each element of array A is an integer within the range [−1,000..1,000].
 Complexity:

 expected worst-case time complexity is O(N);
 expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
 Elements of input arrays can be modified.
 */

var A = [3, 1, 2, 4, 3,10,11,3];
function solution1(A) {
    // write your code in JavaScript (Node.js 4.0.0)

// initialize
    // total = 0; minDiff = -infinity; P = 1; 
    var total = 0, minDiff = Infinity, P = 1;

// array length can't be less than P
    if(A.length <= P){
        return -1;
    }

// while P < length;
    while(P < A.length){
        total = 0;
        // loop through whole array
        A.forEach(function(num, i){
            //if index is less than P
            if(i < P){
                //sum += array[i]
                total += num;
            } else{ // else - we are at P
                // sum -= array[i]
                total -= num;
            }
        });
        // is sum < minDiff
        total = Math.sqrt(Math.pow(total,2));
        
        log(P, total);
        if(total < minDiff){
            // minDiff = sum;
            minDiff = total;
        }

        P++;
    }
    return minDiff;

}

function solution2(A){
// init val
    var total = 0,
        sum,
        diff,
        minDiff = Infinity;

    if(A.length < 2){
        return -1;
    }

    sum = getArraySum(A,0);

    A.forEach(function(num, i){
        total = total + num;
        diff = total - (sum - total);

        diff = Math.sqrt(Math.pow(diff, 2));

        log(i+1, diff);
        if(diff < minDiff){
            minDiff = diff;
        }
    });

    return minDiff;
}
function getArraySum(arr, initVal){
    var reducer = function(prev, next){
        return prev+ next;
    }

    return arr.reduce(reducer, initVal);
}

console.log('ABS Min '+solution2(A));

function log(P,total){
    "use strict";
    console.log(`P = ${P}, difference = ${total}`);
}