/**
 * Created by joebm08 on 12/25/15.
 * 
 * A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

 For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps.

 Write a function:

 int solution(int N);

 that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

 For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5.

 Assume that:

 N is an integer within the range [1..2,147,483,647].
 Complexity:

 expected worst-case time complexity is O(log(N));
 expected worst-case space complexity is O(1).
 */


function solution(N){
    var binary = [], num;
    while(N >= 1){
        num = N % 2;
        binary.unshift(num);
        N = Math.floor(N/2);
    }
    
    // variables
    // index, length, max
        // length - (i+1) > max
            // 

    var i  = 0, max = 0, length = binary.length, left = 0, zeroCounter = 0;
    
    while(i < length){
        if(binary[i] === 1){
            left = i;
            if(zeroCounter > max){
                max = zeroCounter;
            }
            zeroCounter = 0;

        } else if(binary[i] === 0){
            ++zeroCounter;
        }
        
        i++;
    }
    console.log(binary);
    return max;
}

console.log(solution(66561));
console.log(solution(1041));