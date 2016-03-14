/*
You are given two 32-bit numbers, N and M, and two bit positions, i and j. 
Write a method to set all bits between i and j in N equal to M (e.g., M becomes a substring of N located at i and starting at j).
EXAMPLE:
Input: N = 10000000000, M = 10101, i = 2, j = 6 Output: N = 10001010100
 */

var N = Math.pow(2,8);
var M = 9;
var i = 4;
var j = 7;

var out = insertMinN(N, M, i , j);
console.log(getBinary(out));  



function insertMinN(N, M, i, j){
  var n = clearBitsJthroughI(N, i, j);
  console.log('N',getBinary(n),'M',getBinary(M),'i',i,'j',j);
  return setVal(n, M, i, j);
}

function clearBitsJthroughI(num, i, j){
  var mask;
  for(var x = i; x <= j; x++){
    mask = ~(1 << x);
    num = num & mask;
  }
  return num;
}

function setVal(N, M, i, j){
  var range = j - i;
  return (N | (M << i));
}

function getBinary(num){
  var arr = [];
  binaryRec(num, arr);
  
  function binaryRec(num, arr){
   if(num === 0){
     arr.unshift(num);
     return;
   }
  
    // find mod
    arr.unshift(num % 2);
    binaryRec(Math.floor(num/2), arr); 
  }
  
  return arr.join('');
}
