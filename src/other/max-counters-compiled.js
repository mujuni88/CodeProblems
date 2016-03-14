/**
 * Created by joebm08 on 12/22/15.
 * You are given N counters, initially set to 0, and you have two possible operations on them:

 increase(X) − counter X is increased by 1,
 max counter − all counters are set to the maximum value of any counter.
 A non-empty zero-indexed array A of M integers is given. This array represents consecutive operations:

 if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
 if A[K] = N + 1 then operation K is max counter.
 For example, given integer N = 5 and array A such that:

 A[0] = 3
 A[1] = 4
 A[2] = 4
 A[3] = 6
 A[4] = 1
 A[5] = 4
 A[6] = 4
 the values of the counters after each consecutive operation will be:

 (0, 0, 1, 0, 0)
 (0, 0, 1, 1, 0)
 (0, 0, 1, 2, 0)
 (2, 2, 2, 2, 2)
 (3, 2, 2, 2, 2)
 (3, 2, 2, 3, 2)
 (3, 2, 2, 4, 2)
 The goal is to calculate the value of every counter after all operations.

 Write a function:

 function solution(N, A);

 that, given an integer N and a non-empty zero-indexed array A consisting of M integers, returns a sequence of integers representing the values of the counters.

 The sequence should be returned as:

 a structure Results (in C), or
 a vector of integers (in C++), or
 a record Results (in Pascal), or
 an array of integers (in any other programming language).
 For example, given:

 A[0] = 3
 A[1] = 4
 A[2] = 4
 A[3] = 6
 A[4] = 1
 A[5] = 4
 A[6] = 4
 the function should return [3, 2, 2, 4, 2], as explained above.

 Assume that:

 N and M are integers within the range [1..100,000];
 each element of array A is an integer within the range [1..N + 1].
 Complexity:

 expected worst-case time complexity is O(N+M);
 expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
 Elements of input arrays can be modified.
 */

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


function solution(N, A) {
    var operationValue,
        max = 0,
        lastBase = 0;
    var counterArray = getArrayWithSetValues(N, 0);

    for (var i = 0; i < A.length; i++) {
        operationValue = A[i];
        if (operationValue >= 1 && operationValue <= N) {

            if (counterArray[operationValue - 1] < lastBase) {
                counterArray[operationValue - 1] = lastBase + 1;
            } else {
                counterArray[operationValue - 1]++;
            }

            if (counterArray[operationValue - 1] > max) {
                max = counterArray[operationValue - 1];
            }
        } else {
            lastBase = max;
        }
    }

    for (var x = 0; x < counterArray.length; x++) {
        if (counterArray[x] < lastBase) {
            counterArray[x] = lastBase;
        }
    }
    return counterArray;
}

function getArrayWithSetValues(size, val) {
    var A = [];
    for (var i = 0; i < size; i++) {
        A.push(val);
    }

    return A;
}

function setArrayValues(arr, val) {
        for (var i = 0; i < arr.length; i++) {
        arr[i] = val;
    }
}

console.log(solution(5, [70, 7, 7, 7, 7]));

//# sourceMappingURL=max-counters-compiled.js.map