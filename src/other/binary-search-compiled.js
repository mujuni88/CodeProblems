/**
 * Created by joebm08 on 1/6/16.
 * Binary Search Function
 */


function bsIndex(A, val) {
    
    var currIndex,
        minIndex = 0,
        maxIndex = A.length - 1,
        currVal;

    while (minIndex <= maxIndex) {
        currIndex = minIndex + maxIndex >> 1;
        currVal = A[currIndex];

        if (val < currVal) {
            maxIndex = currIndex - 1;
        } else if (val > currVal) {
            minIndex = currIndex + 1;
        } else {
            return currIndex;
        }
    }

    return -1;
}

function rec(_x, _x2, _x3, _x4) {
    var _again = true;

    _function: while (_again) {
        var A = _x,
            val = _x2,
            minIndex = _x3,
            maxIndex = _x4;
        currIndex = currVal = undefined;

                _again = false;
        var currIndex = minIndex + maxIndex >> 1;
        var currVal = A[currIndex];

        if (currVal === val) {
            return currIndex;
        } else if (val < currVal) {
            maxIndex = currIndex - 1;
            _x = A;
            _x2 = val;
            _x3 = minIndex;
            _x4 = maxIndex;
            _again = true;
            continue _function;
        } else {
            minIndex = currIndex + 1;
            _x = A;
            _x2 = val;
            _x3 = minIndex;
            _x4 = maxIndex;
            _again = true;
            continue _function;
        }
    }
}
console.log(bsIndex([2, 4, 5, 7, 9, 11, 15], 5));

//# sourceMappingURL=binary-search-compiled.js.map