/**
 * Created by joebm08 on 1/9/16.
 * 
 * FLATTEN ARRAY
 * Given the folowing input produce the output. 
 *  var input = [1, {a:[2,3]}, 4, [5,[6],[20,[21,[22,23,[24]]],25,26,27,[28],[29,[30]]]],7,[8,[9,[10]],[11]]];
    var output = [1, {a:[2,3]},4,5, 6, 7, 8, 9, 10];
 */


var input = [1, { a: [2, 3] }, 4, [5, [6], [20, [21, [22, 23, [24]]], 25, 26, 27, [28], [29, [30]]]], 7, [8, [9, [10]], [11]]];
var input2 = [[5, [6], [20, [21, [22, 23, [24]]], 25, 26, 27, [28]]]];
var output = [1, { a: [2, 3] }, 4, 5, 6, 7, 8, 9, 10];

function flattenArray(arr) {
    var initArray = [];
    flattenArrayRecursive(arr, initArray);

    return initArray;
}
function flattenArrayRecursive(val, initArray) {
    if (!Array.isArray(val)) {
        initArray.push(val);
    } else {
        val.forEach(function (item) {
            flattenArrayRecursive(item, initArray);
        });
    }
}

function flattenArrayNonRecursive(arr) {
    var outPutArray = [],
        stackArray = [],
        temp,
        i,
        vl;

    arr.forEach(function (item) {
        if (!Array.isArray(item)) {
            outPutArray.push(item);
        } else {
            item.forEach(function (vals) {
                if (!Array.isArray(vals)) {
                    outPutArray.push(vals);
                } else {
                    stackArray.push(vals);
                }

                while (stackArray.length) {

                    // get the array put in the stack
                    temp = stackArray.pop();
                    if (!Array.isArray(temp)) {
                        // get the index in the stack
                        i = temp.i;
                        temp = temp.a;
                    } else {
                        i = 0;
                    }

                    while (i < temp.length) {
                        vl = temp[i];
                        if (!Array.isArray(vl)) {
                            outPutArray.push(vl);
                        } else {
                            // store the index and the array we left at
                            stackArray.push({ i: ++i, a: temp });

                            // store the new array
                            stackArray.push(vl);
                            break;
                        }

                        i++;
                    }
                }
            });
        }
    });

    return outPutArray;
}

console.log(flattenArrayNonRecursive(input));

//# sourceMappingURL=flatten-array-compiled.js.map