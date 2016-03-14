/**
 * Created by joebm08 on 12/17/15.
 * Question:
 *    You are given an array of characters arr, which consists of sequences of characters (words) separated by space characters.
 How can you most efficiently reverse the order of words in the sentence?
 Explain and code your solution and analyze the runtime and space complexity.

 For example:
 [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ', 'm', 'a', 'k', 'e', 's', '  ', 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

 would turn into:
 [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ', 'm', 'a', 'k', 'e', 's', '  ', 'p', 'e', 'r', 'f', 'e', 'c', 't' ]
 */

// seperate into an array of words eg
// loop through each character
// push character in temp array
// if space or end of the array
// push temp array to words array
// clear temp

// var words = [[l,a,s,t],[f,i,r,s,t]]

// loop through rows
// loop through cols
// get array of words
// push word to final array

// return finalArray

"use strict";

if (!Array.prototype.forEachBackwards) {
    Array.prototype.forEachBackwards = forEachBackwards;
}

function forEachBackwards(fn) {
    for (var i = this.length - 1; i >= 0; i--) {
        fn(this[i], i, this);
    }
}

function reverseWords(arr) {
    "use strict";
    var reversedWords,
        finalArr = [];

    reversedWords = splitter(arr, '  ');
    reversedWords.forEach(function (item) {
        finalArr = finalArr.concat(item);
    });

    return finalArr;
}

function splitter(arr, param) {
    "use strict";

    var temp = [],
        words = [];

    arr.forEach(function (char, i) {
        temp.push(char);

        if (char === param || i === arr.length - 1) {
            words.unshift(temp);
            temp = [];
        }
    });

    return words;
}

function mirrorReverse(arr, start, end) {
    "use strict";
    var temp;

    while (start < end) {
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }
}

function reverseWords2(arr) {
    "use strict";

    var start = 0,
        end = arr.length - 1,
        wordStart = null;
    mirrorReverse(arr, 0, arr.length - 1);

    for (var i = 0; i < arr.length; i++) {
        if (wordStart !== null) {
            if (arr[i] === '  ') {
                mirrorReverse(arr, wordStart, i - 1);
                wordStart = null;
            } else if (i === arr.length - 1) {
                mirrorReverse(arr, wordStart, i);
                wordStart = null;
            }
        } else {
            wordStart = i;
        }
    }

    return arr;
}

var w = ['p', 'e', 'r', 'f', 'e', 'c', 't', '  ', 'm', 'a', 'k', 'e', 's', '  ', 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e'];
var w1 = ['p', 'e', 'r', 'f', 'e', 'c', 't', '  ', '  ', '  ', 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  '];
console.log(reverseWords2(w1));

//# sourceMappingURL=reverse-words-compiled.js.map