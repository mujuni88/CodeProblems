/**
 * Created by joebm08 on 12/18/15.
 *
 Matrix Spiral Print

 Given a 2D array (matrix) named M, print all items of M in a spiral order, clockwise.
 For example:

M  =     1   2   3   4   5
         6   7   8   9  10
         11  12  13  14  15
         16  17  18  19  20

 The clockwise spiral print is:  1 2 3 4 5 10 15 20 19 18 17 16 11 6 7 8 9 14 13 12
 */
        // 0, 1,2,3,4
var A = [[1,2,3,4,5], //0
        [6,7,8,9,10],//1
        [11,12,13,14,15],//2
        [16,17,18,19,20]]; //3

function printMatrixSpiral(A) {
// first step 
    // A[0][0 - 4]
    // A[1][4]
    // A[2][4]
    // A[3][4 - 0]
    // A[2][0]
    //A[1][0-3]
    //A[2][3-1]   

    //rows 0,1,2,3,2,1,2
        // columns 0 - 4, 4, 4, 4 - 0, 





}